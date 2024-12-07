const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');
const { peerProxy } = require('./peerProxy.js');

const authCookieName = 'token';

// The service port may be set on the command line
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the applications static content
app.use(express.static('public'));

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

// GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// secureApiRouter verifies credentials for endpoints
const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  const authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// GetGoals
secureApiRouter.get('/goals/:userName', async (req, res) => {
  const userName = req.params.userName;  // Get userName from URL parameter

  if (!userName) {
    return res.status(400).send({ msg: 'UserName is required' });
  }

  try {
    const goals = await DB.getGoals(userName);  // Fetch goals from the user's collection
    res.send(goals);  // Return the user's goals
  } catch (error) {
    console.error('Error fetching goals:', error);
    res.status(500).send({ msg: 'Error fetching goals' });
  }
});

// SubmitGoal
secureApiRouter.post('/goal/:userName', async (req, res) => {
  const { userName } = req.params;  // Get userName from URL parameter
  const { goal } = req.body;  // Get goal data from request body

  console.log('Received goal for user:', userName);
  console.log('Goal data:', goal);

  if (!userName || !goal) {
    return res.status(400).send({ msg: 'UserName and goal are required' });
  }

  try {
    await DB.addGoal(userName, goal);  // Add goal to the user's collection
    const goals = await DB.getGoals(userName);  // Fetch updated goals for the user
    res.send(goals);  // Return updated goals
  } catch (error) {
    console.error('Error adding goal:', error);
    res.status(500).send({ msg: 'Error adding goal' });
  }
});

// update goal completion status
secureApiRouter.put('/goal/:userName/:goalId', async (req, res) => {
  const { userName, goalId } = req.params;
  const { completed, goalDate } = req.body;

  if (completed === undefined || goalDate === undefined) {
    return res.status(400).send({ msg: 'missing required status' });
  }

  try {
    console.log(`Attempting to update goal ${goalId} for user ${userName}`);
    // Update the goal's 'completed' field in the user's collection
    const result = await DB.updateGoal(userName, goalId, { completed, goalDate });

    if (result.modifiedCount === 0) {
      return res.status(404).send({ msg: 'Goal not found or already updated' });
    }

    // Optionally, fetch the updated list of goals for the user (if needed)
    const goals = await DB.getGoals(userName);

    res.send(goals);  // Return the updated list of goals
  } catch (error) {
    console.error('Error updating goal:', error);
    res.status(500).send({ msg: 'Error updating goal' });
  }
});

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

peerProxy(httpService);

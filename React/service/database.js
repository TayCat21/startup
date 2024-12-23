const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const dbStart = client.db(config.dbName);
const userCollection = dbStart.collection('users');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await dbStart.command({ ping: 1 });
  console.log('Connected to database:', dbStart.databaseName);
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function getGoalById(userName, goalId) {
  const userGoalsCollection = dbStart.collection(userName);  // Get the user's goals collection
  try {
    const goalObjectId = new ObjectId(goalId);  // Convert goalId to ObjectId
    const goal = await userGoalsCollection.findOne({ _id: goalObjectId });  // Fetch the goal by ObjectId
    return goal;
  } catch (error) {
    console.error('Error fetching goal by ID:', error);
    throw error;
  }
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

async function addGoal(userName, goal) {
    const userGoalsCollection = dbStart.collection(userName);
    console.log('Inserting goal into collection:', userGoalsCollection.collectionName);
    return userGoalsCollection.insertOne(goal);  // Insert the goal into the user's collection
  }

  async function getGoals(userName) {
    const userGoalsCollection = dbStart.collection(userName); 
    return userGoalsCollection.find().toArray();  // Fetch all goals for the given user
  }

  async function updateGoal(userName, goalId, updateData) {
    const userGoalsCollection = dbStart.collection(userName);  // Access the user's collection
    try {
      // Convert goalId to ObjectId if it's a string
      const goalObjectId = new ObjectId(goalId);  // Ensures goalId is a valid ObjectId
  
      const result = await userGoalsCollection.updateOne(
        { _id: goalObjectId }, // Find the goal by its ObjectId
        { $set: updateData } // Update the goal's completion status
      );
  
      return result;
    } catch (error) {
      console.error('Error updating goal:', error);
      throw error;  // Log the error for debugging
    }
  }
  

module.exports = {
  getUser,
  getUserByToken,
  getGoalById,
  createUser,
  addGoal,
  getGoals,
  updateGoal,
};

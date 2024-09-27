# startup
*startup application for CS 260*

## Specification Deliverable

## Elevator Pitch
Have you struggled making and setting goals? Do you struggle sticking to your plans and checking back on them? The MyGoals site helps you through the process of goalsetting to help you keep better track of your improvement. Whether it is coming up with good goals, making realistic plans for them, or looking back for ways to improve, this site is designed to see you through.

## Design
**MyGoals Home**

![Mock Home](pitchPics/home.JPG)

**Planning Stage**

![Mock Plan](pitchPics/plan.JPG)

**Reflecting Stage**

![Mock Review](pitchPics/review.JPG)

## Key Features
- Secure Login through https
- Discover new goals through games and questionaires
- Prioritize your ideas to choose and save them for later
- Take goals and establish firm plans through follow-up questions
- Set and edit reminders to their calendar
- Reflect on how goals went through self-evaluation surveys
- Celebrate your efforts through the achievements log

## Technologies
I will use each of these following technologies in my project.
- **HTML** - Provides the correct structre for the site. There will be 3-4 HTML pages. One for login, the home page, and others for the goal setting/making/reflecting.
- **CSS** - Applies the styling and design that will provide a good color, shape, and contrast to the page.
- **React** - Works the login, goal-setting games, display of goals, and interactive surveys.
- **Service** - Backend service for each of the following:
    - login credentials
    - saved user goals
- **DB/Login** - Registers login, and secures user goals and credentials
- **WebSocket** - Displays accomplished goals in the achievements log 

## HTML deliverable 🚀
Here is the required information for my Startup HTML

I created a foundation for my project, leaving connections to let CSS, JavaScript, and Websockets to build off of it.

To be more Specific:

- [x] **HTML pages** - I made 5 HTML pages - Login *(index.html)*, Home *(goals.html)*, Goalsetting *(plan.html)*, Brainstorming *(ideas.html)*, and Reviewing *(review.html)*.
- [x] **Links** - There is a nav bar to the Login and Home page on each page, the other three have various links in the Home page. There are also links to help the user through the goalsetting process.
- [x] **Text** - There is representational text given in place of goal names, descriptions, and dates. These will later be inputs from the user.
- [ ] **Images** - Other than the favicon, I didn't really have any reason to include images.
- [x] **DB/Login** - Input for name, email and password are set for login. The different goals/ideas given from the user will also be stored in the database.
- [x] **WebSocket** - There is an achievments log that will display when any user completes a given task (make goal, accomplish goal, etc).

*I also have comments within my code to help explain functions*

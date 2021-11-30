const express = require('express');
const Datastore = require('nedb');
const app = express();
// Sets the database location relative to project root
const games = new Datastore('databases/games.db');
const user_info = new Datastore('databases/user_info.db');
const reviews = new Datastore('databases/reviews.db');
//const currents = new Datastore('databases/currents.db');
var cors = require('cors')

// Start the database servers
app.listen(3001, () => console.log('Databases started on port 3001'));
app.use(express.json({limit: '1mb'}));

app.use(cors())

// Loads data if it exists, creates database otherwise
games.loadDatabase();
user_info.loadDatabase();
reviews.loadDatabase();

// Handles querying into the games database
app.get('/findgame/:query', (request, response) => {
    console.log("Looking for '" + request.params.query + "'!");
    games.find({ Name: new RegExp(request.params.query) }, (err, data) => {
        if (err) {
            response.status(500).send(err.toString());
            return;
        }
        response.json(data);
        console.log(data);
    });
});

//Handle query the username
app.get('/finduser/:query', (request, response) => {
    console.log("Looking for '" + request.params.query + "'!");
    user_info.find({ username: new RegExp(request.params.query) }, (err, data) => {
        if (err) {
            response.status(500).send(err.toString());
            return;
        }
        response.json(data);
        console.log(data);
    });
});

// Handles adding new users into the database
app.post('/adduser', (request, response) => {
    console.log('I got a request!');
    console.log(request.body);
    const data = request.body;
    user_info.insert(data);    
    response.json(data);
});

// Adds review to the database
app.post('/addreview', (request, response) => {
    console.log('Adding an review!');
    const data = request.body;
    reviews.insert(data);
    response.json(data);
});

// Handle query for reviews (by Game)
app.get('/findreviews/:query', (request, response) => {
    console.log("Looking for '" + request.params.query + "'!");
    reviews.find({ Game: new RegExp(request.params.query) }, (err, data) => {
        if (err) {
            response.status(500).send(err.toString());
            return;
        }
        response.json(data);
        console.log(data);

    });
});

// Handles adding a follower to an existing user
app.post('/addfollower', (request, response) => {
    console.log('I got a follower!');
    const data = request.body;
    console.log(data);
    const user = data.username;
    const follower = data.follower;

    user_info.update(
        // Find the user to update to
        { username: user },
        // Add the follower to their list of followers
        { $addToSet: { followers: follower } },
        {},
        () => {}
    );
    response.json(data);
});

// Handles removing a follower from an existing user
app.post('/removefollower', (request, response) => {
    console.log('I lost a follower!');
    const data = request.body;
    console.log(data);
    const user = data.username;
    const follower = data.follower;

    user_info.update(
        // Find the user to update to
        { username: user },
        // Remove the follower from their list of followers
        { $pull: { followers: follower } },
        {},
        () => {}
    );
    response.json(data);
});

// Handles adding a game to the backlog
app.post('/addtobacklog', (request, response) => {
    console.log('Adding to the backlog!');
    const data = request.body;
    console.log(data);
    const user = data.username;
    const game = data.game;

    user_info.update(
        // Find the user to update to
        { username: user },
        // Add the game to their backlog
        { $addToSet: { backlog: game } },
        {},
        () => {}
    );
    response.json(data);
});

// Handles removing a game from the backlog
app.post('/removefrombacklog', (request, response) => {
    console.log('Removing a game from the backlog!');
    const data = request.body;
    console.log(data);
    const user = data.username;
    const game = data.game;

    user_info.update(
        // Find the user to update to
        { username: user },
        // Remove the game from their backlog
        { $pull: { backlog: game } },
        {},
        () => {}
    );
    response.json(data);
});

// Handles adding a game to the user's library
app.post('/addtolibrary', (request, response) => {
    console.log('Adding to the library!');
    const data = request.body;
    console.log(data);
    const user = data.username;
    const game = data.game;

    user_info.update(
        // Find the user to update to
        { username: user },
        // Add the game to their list of followers
        { $addToSet: { library: game } },
        {},
        () => {}
    );
    response.json(data);
});

// Handles removing a game from the library
app.post('/removefromlibrary', (request, response) => {
    console.log('Removing a game from the library!');
    const data = request.body;
    console.log(data);
    const user = data.username;
    const game = data.game;

    user_info.update(
        // Find the user to update to
        { username: user },
        // Remove the game from their library
        { $pull: { library: game } },
        {},
        () => {}
    );
    response.json(data);
});

// Handles changing the user's status
app.post('/changestatus', (request, response) => {
    console.log('Setting the status!');
    const data = request.body;
    console.log(data);
    const user = data.username;
    const userStatus = data.userStatus;

    user_info.update(
        // Find the user to update to
        { username: user },
        // Change the user's status
        { $set: { userStatus: userStatus } },
        {},
        () => {}
    );
    response.json(data);
});

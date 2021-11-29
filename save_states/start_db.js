const express = require('express');
const Datastore = require('nedb');
const app = express();
// Sets the database location relative to project root
const games = new Datastore('databases/games.db');
const user_info = new Datastore('databases/user_info.db');

// Start the database servers
app.listen(3001, () => console.log('Databases started on port 3001'));
app.use(express.json({limit: '1mb'}));

// Loads data if it exists, creates database otherwise
games.loadDatabase();
user_info.loadDatabase();

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
    user_info.find({ Username: new RegExp(request.params.query) }, (err, data) => {
        if (err) {
            response.status(500).send(err.toString());
            return;
        }
        response.json(data);
        console.log(data);
    });
});

// Handles appending things into the user_info database
app.post('/api', (request, response) => {
    console.log('I got a request!');
    console.log(request.body);
    const data = request.body;
    user_info.insert(data);    
    response.json(data);
});

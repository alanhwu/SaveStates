const express = require('express');
const Datastore = require('nedb');

const app = express();
app.listen(3001, () => console.log('Database listening at port 3001'));
app.use(express.json({limit: '1mb'}));

// Sets the database location relative to project root
const database = new Datastore('databases/user_info.db');

// Loads past data into memory, or creates a database if it does not exist.
database.loadDatabase();

// Handles querying into the database
app.get('/api', (request, response) => {
    database.find({},(err, data) => {
    if (err) {
        response.end();
        return;
    }
    response.json(data);
  });
});

// Handles pushing things into the database
app.post('/api', (request, response) => {
    console.log('I got a request!');
    console.log(request.body);
    const data = request.body;
    database.insert(data);    
    response.json(data);
});

const express = require('express');
const Datastore = require('nedb');

const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

const database = new Datastore('database.db');

// Loads past data into memory, or creates a database if it does not exist.
database.loadDatabase();

app.get('/api', (request, response) => {
    database.find({},(err, data) => {
    if (err) {
        response.end();
        return;
    }
    response.json(data);
  });
});

app.post('/api', (request, response) => {
    console.log('I got a request!');
    console.log(request.body);
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);    
    response.json(data);
});

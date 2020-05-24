const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const Albums = require('./albums.js');
const Artists = require('./artists.js');
const BasicAlbum = require('./BasicAlbum.js');

const routes = require('./routes.js');
app = routes.app;

const port = 8081;

let url = 'mongodb://levylistauser:levylista@localhost:27017?authSource=admin';

app.use(express.json());


let database = null;

MongoClient.connect(url, (err, connection) => {
    if (err) throw err;

    db = connection.db("levylista");

    database = db;

    Albums.setDb(database);
    Artists.setDb(database);
});


app.listen(port, () => console.log(`Example app listening at localhost on port ${port}`));

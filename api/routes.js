const express = require('express');

const Albums = require('./albums.js');
const Artists = require('./artists.js');
const BasicAlbum = require('./BasicAlbum.js');

const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/vue/index.html');
});

app.get("/api/albums", async (req, res) => {

    let sort = req.query.sort;
    let asc = true;

    if(req.query.direction === "DESC") {
        asc = false;
    }

    res.append("Access-Control-Allow-Origin", "*");
    res.append("Content-Type", "application/json");
    result = await Albums.getAll(sort, asc);
    res.send(result);

});

app.get("/api/albums/search", async (req, res) => {
    //TODO: sanitize input
    res.send(await Albums.search(req.query.q));
});

app.post("/api/albums", async (req, res) => {
    //TODO: sanitize input for realz!!
    let album = new BasicAlbum(req.body);
    let date = new Date();
    album.setAdded(date);
    res.send(await Albums.postNew(album));
});

app.get("/api/albums/:id", async (req, res) => {
    //TODO: sanitize input
    //TODO: make real cors headers
    res.append("Access-Control-Allow-Origin", "*");
    res.send(await Albums.getSingle(req.params.id));
});

app.delete("/api/albums/:id", async (req, res) => {
    res.send(await Albums.delete(req.params.id));
});

app.get("/api/artists", async (req, res) => {
    res.send(await Artists.getAll());
});


app.get("/api/artists/:id", async (req, res) => {
    //TODO: sanitize input
    let result = await Artists.getSingle(req.params.id)
        .catch((err) => {console.log(err);});
    res.send(result);
});

exports.app = app;

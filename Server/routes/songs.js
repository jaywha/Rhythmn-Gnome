const express = require("express");

// songRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /songs.
const songRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// variable for collection name for easier changes
const db_collection = "hds_songs";

// GET All Songs
songRoutes.route("/songs").get(function (req, res){
    let db_connect = dbo.getDb();
    db_connect
        .collection(db_collection)
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// GET Song by ID
songRoutes.route("/songs/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect
        .collection(db_collection)
        .findOne(myquery, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// ADD new Song
songRoutes.route("/songs/add").post(function(req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
        q_pos: req.body.q_pos,
        name: req.body.name,
        length: req.body.length,
        url: req.body.url,
        icon: req.body.icon,
        artist: {
            name: req.body.artist.name,
            album: req.body.artist.album
        }
    };
    db_connect.collection(db_collection).insertOne(myobj, function(err , res) {
        if (err) throw err;
        response.json(res);
    });
});

module.exports = songRoutes;
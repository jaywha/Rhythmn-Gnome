const express = require("express");

// songRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /songs.
const songRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// GET All Songs
songRoutes.route("/songs").get(function (req, res){
    let db_connect = dbo.getDb();
    db_connect
        .collection("hds_songs")
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
        .collection("hds_songs")
        .findOne(myquery, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

module.exports = songRoutes;
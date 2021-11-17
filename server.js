// the requires linking the packages
const express = require("express");
const path = require("path");
const fs = require("fs");
const util = require("util");


// server setup
const app = express();
const PORT = process.env.PORT || 3001;


// middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));


// the GET request
app.get("/api/notes", function(req, res) {
    readFileAsync("./db/db.json", "utf8").then(function(data)  {
        notes = [].concat(JSON.parse(data))
        res.json(notes);
    })
});

// the POST request
app.get("/api/notes", function(req, res) {
    readFileAsync("./db/db.json", "utf8").then(function(data)  {
        notes = [].concat(JSON.parse(data))
        res.json(notes);
    })
});

// the DELETE request
app.get("/api/notes", function(req, res) {
    readFileAsync("./db/db.json", "utf8").then(function(data)  {
        notes = [].concat(JSON.parse(data))
        res.json(notes);
    })
});
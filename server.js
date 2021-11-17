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
        const notes = [].concat(JSON.parse(data))
        res.json(notes);
    })
});

// the POST request
app.post("/api/notes", function(req, res) {
    const note = req.body;
    readFileAsync("./db/db.json", "utf8").then(function(data)  {
        const notes = [].concat(JSON.parse(data));
        note.id = notes.length + 1
        notes.push(note);
        return notes
    }).then(function(notes) {
        writeFileAsync("./db/db.json", JSON.stringify(notes))
        res.json(note);
    })
});

// the DELETE request
app.delete("/api/notes", function(req, res) {
    const deleteIt = parseInt(req.params.id);
    readFileAsync("./db/db.json", "utf8").then(function(data)  {
        const notes = [].concat(JSON.parse(data))
        const newCoolNotes = []
        for (let i = 0; i<notes.length; i++) {
            if(deleteIt !== notes[i].id) {
                newCoolNotes.push(notes[i])
            }
        }
        return newCoolNotes
    }).then(function(notes) {
        writeFileAsync("./db/db.json", JSON.stringify(notes))
        res.send("Saved");
    })
});



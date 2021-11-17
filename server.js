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


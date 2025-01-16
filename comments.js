// Create web server
// Create an API to get all the comments
// Create an API to add a new comment
// Create an API to delete a comment
// Create an API to update a comment

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const COMMENTS_FILE = path.join(__dirname, 'comments.json');

app.use(bodyParser.json(


require('dotenv').config();
const express = require('express');
const path = require('path');
const db = require("./knex.js");
const postgraphile = require('./postgraphile')
const cors = require("cors");

const PORT = process.env.PORT || 5000;


const app = express();

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));
app.use(cors());
app.use(postgraphile);

// Answer API requests.
app.get('/api', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.json({message : "Super Sumo Stats"})
  res.send('{"message":"Hello from the custom server!"}');
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.error(`listening on port ${PORT}`);
});


require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require("fs");
//const db = require("./knex.js");
//const postgraphile = require('./postgraphile')
const cors = require("cors");
const mongoose = require('mongoose');
const Rikishi = require('./models/rikishi');
const allRikishi = require('../apify_storage/key_value_stores/someRiki.json')

const PORT = process.env.PORT || 5000;


const app = express();

//connect to mongoDB
const dbURI = process.env.MONGODB_URI
//async - returns like a promise
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(PORT, function () {
      console.error(`listening on port ${PORT}`);
  }))
  .catch((err) => console.log(err));


// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));
app.use(cors());
//app.use(postgraphile);

// Answer API requests.
app.get('/api', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.json({message : "Super Sumo Stats"})
  res.send('{"message":"Hello from the custom server!"}');
});

app.get('/add-rikishi', (req,res) => {
  //pass the Rikishi model new values
  const rikishi = new Rikishi({
    id: 1,
    ringName: "Hakuho Sho",
    realName: "Something whatever"
  })
  //save the instance to the database
  rikishi.save()
  .then((result) => res.send(result))
  .catch((err) => console.log(err));
})

//get all the rikishi - there are other find methods
app.get('/all-rikishi', (req,res) => {
  //method call on the model
  Rikishi.find()
  .then((result) => {
    res.send(result)
  })
  .catch((err) => console.log(err))
});

app.get('/rikishi', (req,res) => {
  //method call on the model
  Rikishi.findById('6173ccb87817098a2b0b3ce9')
  .then((result) => {
    res.send(result)
  })
  .catch((err) => console.log(err))
});

app.get('/insert-rikishi', (req, res) => {
  const rikishi = JSON.parse(fs.readFileSync('./apify_storage/key_value_stores/someRiki.json'));
  Rikishi.insertMany(rikishi)
  .then((result) => res.send("inserted"))
  .catch((err) => console.log(err))
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});




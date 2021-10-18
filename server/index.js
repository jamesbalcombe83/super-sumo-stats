const express = require("express");
const path = require("path");
const db = require("./knex.js");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});


app.get("/api", (req, res) => {
    try {
        res.json({message : "Super Sumo Stats"}).status(200);
    } catch (error) {
        console.log("Error loading");
        res.sendStatus(500);
    }
})

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

module.exports = app;
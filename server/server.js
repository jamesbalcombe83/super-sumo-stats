const express = require("express");
const path = require("path");
const db = require("./knex.js");
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static(path.resolve(__dirname, "..", "build")));

(async () => {
    try {
      //console.log("Running migrations...");
      //await db.migrate.latest();
  
      console.log("Starting express...");
      app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
      });
    } catch (err) {
      console.error("Error starting app!", err);
      process.exit(-1);
    }
  })();

app.get("/", (req, res) => {
    try {
        res.send("hello world").status(200);
    } catch (error) {
        console.log("Error loading");
        res.sendStatus(500);
    }
})

// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;
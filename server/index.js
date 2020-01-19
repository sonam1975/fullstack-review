const express = require("express");
const getReposByUsername = require("/Users/sonam/Desktop/Hack Reactor Programming /hrsf125-fullstack-review/helpers/github.js");
const bodyParser = require("body-parser");
const save = require("../database/index.js");
const find = require("../database/index.js");
const compareValue = require("./sorting.js");
let app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + "/../client/dist"));

app.post("/repos", function(req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  getReposByUsername.getReposByUsername(req.body.term, (err, response) => {
    if (err) throw err;
    save.save(response, err => {
      if (err) res.send(err);
      res.status(200).send("successfully added");
    });
  });
});

app.get("/repos", function(req, res) {
  find.find((err, result) => {
    if (err) {
      throw err;
    }
    res.send(result.compareValue.compareValue("fork_count", "desc"));
  });
});

let port = 8080;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

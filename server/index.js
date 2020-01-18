const express = require("express");
// const bodyParser = require("body-parser");
// app.use(bodyParser());
const bodyParser = require("body-parser");
const request = require("request");

let app = express();
app.use(bodyParser.json());

app.use(express.static(__dirname + "/../client/dist"));

app.post("/repos", function(req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get("/repos", function(req, res) {
  request(
    {
      method: "GET",
      url: "https://api.github.com/users/sonam1975/repos",
      headers: {
        Accept: "application/vnd.github.nebula-preview+json",
        "Content-Type": "application/json"
      }
    },
    function(error, response) {
      if (error) throw new Error(error);
      res.json(response.body);
    }
  );
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

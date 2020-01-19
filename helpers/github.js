const request = require("request");
const config = require("/Users/sonam/Desktop/Hack Reactor Programming /hrsf125-fullstack-review/config.example.js");

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL

  let options = {
    url: "https://api.github.com/users/" + username + "/repos",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent": "request",
      Authorization: `token ${config.TOKEN}`
    }
  };
  request(options, function(error, response, body) {
    if (error) {
      throw error;
    }
    var objBody = JSON.parse(body);
    callback(null, objBody);
  });
};

module.exports.getReposByUsername = getReposByUsername;

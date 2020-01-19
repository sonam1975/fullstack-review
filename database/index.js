const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect(
  "mongodb://localhost/fetcher",
  { useMongoClient: true },
  () => {
    console.log("database created");
  }
);

let repoSchema = new Schema({
  name: { type: String },

  url: { type: String },

  fork_count: { type: Number }
});

let Repo = mongoose.model("Repo", repoSchema);

let save = repos => {
  repos.forEach(rep => {
    var documents = new Repo({
      name: rep.name,

      url: rep.owner.url,
      fork_count: rep.forks
    });
    documents.save(function(err, documents) {
      if (err) {
        return console.error(err);
      }
      console.log(documents + " saved to bookstore collection.");
    });
  });
};

let find = callback => {
  Repo.find(function(err, repos) {
    if (err) return console.error(err);
    callback(null, repos);
  });
};

module.exports.save = save;
module.exports.find = find;

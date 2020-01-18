import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Search from "./components/Search.jsx";
import RepoList from "./components/RepoList.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      repos: []
    };
    this.search = this.search.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    fetch("/https://api.github.com/users/sonam1975/repos", {
      method: "GET",
      Accept: "application/vnd.github.nebula-preview+json",

      "Content-type": "application/json"
    })
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            repos: result
          });
        },

        error => {
          this.setState({
            error
          });
        }
      );
  }
  search(term) {
    this.setState({ username: term });
  }

  render() {
    return (
      <div>
        <h1>Github Fetcher</h1>
        <RepoList repos={this.state.repos} />
        <Search onSearch={this.search} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

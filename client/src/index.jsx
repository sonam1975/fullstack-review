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
    fetch("/repos", {
      method: "GET",

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
          throw error;
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
        <Search onSearch={this.search} />
        <RepoList repos={this.state.repos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

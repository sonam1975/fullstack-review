import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange(e) {
    event.preventDefault();
    this.setState({
      term: e.target.value
    });
  }

  search(e) {
    e.preventDefault();
    fetch("/repos", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json "
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(results => console.log(results));
    // this.props.onSearch(this.state.term);
  }

  render() {
    return (
      <div>
        <h4>Add more repos!</h4>
        Enter a github username:{" "}
        <input value={this.state.terms} onChange={this.onChange} />
        <button onClick={this.search}> Add Repos </button>
      </div>
    );
  }
}

export default Search;

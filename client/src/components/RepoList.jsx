import React from "react";

const RepoList = ({ repos }) => (
  <div>
    {repos.map(x => (
      <ul>
        <li>{x.name}</li>
        <li>{x.url}</li>
        <li>{x.fork_count}</li>
      </ul>
    ))}
  </div>
);

export default RepoList;

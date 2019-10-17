import React from "react";
import propTypes from "prop-types";

const Repo = ({ repo }) => {
  return (
    <div className="card">
      <h6 className="p-4">
        <a href={repo.html_url}>{repo.name}</a>
      </h6>
    </div>
  );
};

export default Repo;

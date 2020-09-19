import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const Repos = ({ className, title, repos }) => {
  return (
    <div className={className}>
      <h2 className="title">{title}</h2>
      <ul>
        {repos.length >= 0 &&
          repos.map((repo) => (
            <a className="listItem" key={repo.id} href={repo.html_url}>
              <li>{repo.name}</li>
            </a>
          ))}
      </ul>
    </div>
  );
};

Repos.defaultProps = {
  className: "",
};

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array.isRequired,
};

export default Repos;

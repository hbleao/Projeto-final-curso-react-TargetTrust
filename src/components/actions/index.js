import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const Actions = ({ handleRepos, handleFavorite }) => {
  return (
    <div className="actions">
      <button className="actions__btn" type="button" onClick={handleRepos}>
        Repósitorios
      </button>
      <button className="actions__btn" type="button" onClick={handleFavorite}>
        Favoritos
      </button>
    </div>
  );
};

Actions.propTypes = {
  handleRepos: PropTypes.func.isRequired,
  handleFavorite: PropTypes.func.isRequired,
};

export default Actions;

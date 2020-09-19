import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const Search = ({ handleSearch }) => {
  return (
    <div className="search">
      <input
        className="serach__input"
        type="search"
        placeholder="Digite o nome do usuário no Github e pressione 'Enter'"
        onKeyUp={handleSearch}
      />
    </div>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Search;

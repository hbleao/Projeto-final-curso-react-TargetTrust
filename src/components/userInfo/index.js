import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const UserInfo = ({ userInfo }) => {
  return (
    <div className="userInfo">
      <img
        className="userInfo__img"
        src={userInfo.photo}
        alt="imagem do usuario"
      />
      <div className="userInfo__header">
        <h1>
          <a
            className="userInfo__name"
            href={`https://github.com/${userInfo.login}`}
          >
            {userInfo.username}
          </a>
        </h1>

        <ul className="repos-info">
          <li> Repositorios: {userInfo.repos} </li>
          <li> Seguidores: {userInfo.followers} </li>
          <li> Seguindo: {userInfo.following} </li>
        </ul>
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  userInfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
  }),
};

export default UserInfo;

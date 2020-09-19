import React from "react";
import ProTypes from "prop-types";

import "./style.css";

import Search from "../../components/search";
import UserInfo from "../../components/userInfo";
import Actions from "../../components/actions";
import Repos from "../../components/repos";

import GithubImg from "../../assets/images/ic_github.png";

const HomeContent = ({
  userInfo,
  repos,
  handleSearch,
  handleRepos,
  handleFavorite,
  initalTitle,
}) => {
  return (
    <div className="home">
      <Search handleSearch={handleSearch} />
      {userInfo && (
        <div className="home__userInfo">
          <UserInfo userInfo={userInfo} />

          <Actions handleRepos={handleRepos} handleFavorite={handleFavorite} />
        </div>
      )}

      {!!repos.length && (
        <Repos className="repos" title="Repositorios" repos={repos} />
      )}
      {!userInfo && (
        <div className="home__logo">
          <p className="home__logo-title"> {initalTitle}</p>
          <img className="home__logo-img" src={GithubImg} alt="logo github" />
        </div>
      )}
    </div>
  );
};

HomeContent.proTypes = {
  userInfo: ProTypes.object.isRequired,
  repos: ProTypes.array.isRequired,
  starred: ProTypes.array.isRequired,
};

export default HomeContent;

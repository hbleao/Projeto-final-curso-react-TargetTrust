import React from "react";
import axios from "axios";

import HomeContent from "./home-container";

const Home = () => {
  const [userInfo, setUserInfo] = React.useState("");
  const [repos, setRepos] = React.useState([]);
  const [disabled, setDisabled] = React.useState(false);
  const [initalTitle, setInitalTitle] = React.useState(
    "Procure seus amigos no github!"
  );

  function getBuilderUrl(username, type) {
    const internalUser = username ? `/${username}` : "";
    const internalType = type ? `/${type}` : "";

    return `https://api.github.com/users${internalUser}${internalType}`;
  }

  function handleSearch(e) {
    const valueInput = e.target.value;

    if (e.key === "Enter") {
      e.target.disabled = true;

      axios
        .get(getBuilderUrl(valueInput))
        .then((res) => {
          setUserInfo({
            username: res.data.name,
            photo: res.data.avatar_url,
            login: res.data.login,
            repos: res.data.public_repos,
            followers: res.data.followers,
            following: res.data.following,
          });
          setRepos([]);
        })
        .catch((err) => {
          setRepos([]);
          setUserInfo("");
          setInitalTitle("Repositório não encontrado!!!");
        });

      e.target.disabled = false;
      !userInfo && (e.target.value = "");
    }
  }

  function handleRepos(type) {
    axios.get(getBuilderUrl(userInfo.login, type)).then((res) => {
      setRepos(res.data);
    });
  }

  return (
    <>
      <HomeContent
        userInfo={userInfo}
        repos={repos}
        handleSearch={(e) => handleSearch(e)}
        handleRepos={() => handleRepos("repos")}
        handleFavorite={() => handleRepos("starred")}
        initalTitle={initalTitle}
      />
    </>
  );
};

export default Home;

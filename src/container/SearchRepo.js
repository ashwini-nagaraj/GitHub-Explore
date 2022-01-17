import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import {
  getUserInfo,
  getUserRepositoriesInitial,
  getUserStarredRepos,
  getUserRepositoriesNextPage,
  getAllRepositories,
} from "../component/apis/api";


import Navbar from "../component/nav-bar/Navbar";
import NavItems from "../component/nav-items/NavItems";
import UserProfile from "../component/user-profile/UserProfile";
import ListRepositories from "../component/repositories/ListRepositories";
import Loading from "../component/loading/Loading";
import "./container.css";

const ErrorScreen = () => {
  const errorImg =
    "https://www.pngitem.com/pimgs/m/255-2550411_404-error-images-free-png-transparent-png.png";
  return (
    <div data-testid="wrapper-div" className="error-page-wrapper">
      <img data-testid="err-img" className="error-img" alt="#" src={errorImg} />
      <span
        data-testid="redirect"
        className="try-again-text"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        Try Again?
      </span>
    </div>
  );
};

function SearchRepo({ match }) {
  const [user, setUser] = useState();
  const [error, setError] = useState(false);
  const [repositories, setRepositories] = useState([]);
  const [initalRepositories, setRepositoriesInital] = useState([]);
  const [starredRepositories, setstarredRepositories] = useState([]);
  const [allRepositories, setAllRepositories] = useState([]);

  const userNameParams = match.params.userName;

  const respoSearch = (searchValue) => {
    const searchArray = allRepositories?.filter((obj) =>
      obj.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setRepositories(searchArray);
  };

  const onChangeCallback = (value) => {
    if (value.length === 0) {
      setRepositories(initalRepositories);
    }
  };

  useEffect((page) => {
    fetchUser();
    fetchRepositories();
    fetchUserStarredRepositories();
    handlePageClick(page);
    fetchAllRepositories();
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  async function fetchUser() {
    try {
      const { data } = await getUserInfo(userNameParams);
      setUser(data);
    } catch (e) {
      setError(true);
    }
  }
  async function fetchRepositories() {
    try {
      const { data } = await getUserRepositoriesInitial(userNameParams);
      setRepositories(data);
      setRepositoriesInital(data);
    } catch (e) {
      setError(true);
    }
  }
  async function fetchUserStarredRepositories() {
    const { data } = await getUserStarredRepos(userNameParams);
    setstarredRepositories(data);
  }

  async function fetchAllRepositories() {
    const { data } = await getAllRepositories(userNameParams);
    setAllRepositories(data);
  }

  async function handlePageClick(page) {
    let currentPage = page.selected + 1;
    const { data } = await getUserRepositoriesNextPage(
      userNameParams,
      currentPage
    );
    setRepositories(data);
    setRepositoriesInital(data);
  }

  return (
    <>
      {user ? (
        <>
          <Navbar data-testid="nav-bar" user={user} />
          <div data-testid="conatiner" className="container">
            <div class="left">
              <UserProfile
                data-testid="userProfile"
                user={user}
                starredRepositories={starredRepositories}
              />
            </div>
            <div class="right">
              <NavItems
                data-testid="nav-items"
                user={user}
                repoSearchCallback={respoSearch}
                onChangeCallback={onChangeCallback}
              />
              <ListRepositories data-testid="list-repos" repos={repositories} user={user} />
              {user.public_repos > 6 && (
                <ReactPaginate
                  data-testid="paginate"
                  user={user}
                  previousLabel={"previous"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  pageCount={Math.ceil(user.public_repos / 10)}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={3}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination justify-content-center"}
                  pageClassName={"page-item"}
                  pageLinkClassName={"page-link"}
                  previousClassName={"page-item"}
                  previousLinkClassName={"page-link"}
                  nextClassName={"page-item"}
                  nextLinkClassName={"page-link"}
                  breakClassName={"page-item"}
                  breakLinkClassName={"page-link"}
                  activeClassName={"active"}
                />
              )}
            </div>
          </div>
        </>
      ) : (
        <>{error ? <ErrorScreen /> : <Loading />}</>
      )}
    </>
  );
}

export default SearchRepo;

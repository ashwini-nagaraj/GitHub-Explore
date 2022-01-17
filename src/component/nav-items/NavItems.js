import React from "react";
import "./NavItems.css";

const NavItems = ({
  user = [],
  repoSearchCallback = () => {},
  onChangeCallback = () => {},
}) => (
  <ul data-testid="nav" className="nav nav-tabs">
    <div data-testid="wrapper" class="input-wrapper">
      <input
        data-testid="search-box"
        className="search-box"
        type="text"
        placeholder="Search for any reopository and enter!"
        onChange={(e) => {
          onChangeCallback(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            e.preventDefault();
            repoSearchCallback(e.target.value);
          }
        }}
      ></input>
    </div>
    <li  className="nav-item">
      <p className="nav-link mb-0 active">
        Repositories{" "}
        {user.public_repos > 1000
          ? user.public_repos.toString().charAt(0) + "K"
          : user.public_repos}
      </p>
    </li>
    <li   className="nav-item">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="tab"
        href={`https://github.com/${user.login}`}
      >
        Overview
      </a>
    </li>
    <li  data-testid="nav-item-projects" className="nav-item">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="tab"
        href={`https://github.com/${user.login}?tab=projects`}
      >
        Projects
      </a>
    </li>
  </ul>
);

export default NavItems;

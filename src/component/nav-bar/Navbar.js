import React, { useState } from "react";
import "./Navbar.css";

const logoImg =
  "https://github.githubassets.com/images/modules/logos_page/Octocat.png";

function Navbar({ user }) {
  const [inputText, setInputText] = useState("");
  const startSearch = (userName) => {
    window.location.href = `/${userName}`;
  };
  return (
    <nav data-testid="navbar" className="navbar navbar-expand-sm .bg-dark.bg-gradient">
      <ul data-testid="list-ul" class="navbar-nav ml-auto">
        <li data-testid="li" class="nav-item">
          <img
            data-testid="profileImg"
            src={logoImg}
            width="40"
            height="40"
            className="mr-3 avatar"
            alt="profile"
          />
        </li>
        <li data-testid="list-items" class="nav-item px-3">
          <input
            data-testid="search box"
            className="search-box-user"
            type="text"
            placeholder="Search for other user"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                e.preventDefault();
                startSearch(inputText);
              }
            }}
          ></input>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

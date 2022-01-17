import React, { useState } from "react";
import "./search.css";
import "font-awesome/css/font-awesome.min.css";
const startSearch = (userName) => {
  window.location.href = `/${userName}`;
};

const logoImg =
  "https://github.githubassets.com/images/modules/logos_page/Octocat.png";

const Search = () => {
  const [inputText, setInputText] = useState("");
  return (
    <div data-testid="homepage" className="homepage-wrapper">
      <img data-testid="img" src={logoImg} className="logo-image" alt="#" />
      <div data-testid="search" className="search-input-box">
        <input
          data-testid="search-box"
          className="search-txt"
          type="text"
          placeholder="Enter Github Username + ENTER!"
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              e.preventDefault();
              startSearch(e.target.value);
            }
          }}
        ></input>
        <button data-testid="search-button" className="search-btn" onClick={() => startSearch(inputText)}>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default Search;

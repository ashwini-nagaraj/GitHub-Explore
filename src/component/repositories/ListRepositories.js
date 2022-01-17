import React from "react";
import Repository from "./Repository";
import "./ListRepositories.css";

const Repositories = ({ repos =[] , user =[]}) => {
  return (
    <section data-testid="section" className="repositories">
      {repos.length > 0 ? (
        <>
          {repos.map((repo) => (
            <Repository  data-testid="repo-test"  key={repo.id} repo={repo} user={user} />
          ))}
        </>
      ) : (
        <span data-testid="error" className="error">
          You sure what you are looking for? Looks like there is no repository
          with this name
        </span>
      )}
    </section>
  );
};

export default Repositories;

import React from "react";
import "./ListRepositories.css";
import moment from "moment";

function Repository({ repo =[] }) {
  return (
    <div data-testid="repo" className="repo">
        <div data-testid="title" className="title">
          <a
            data-testid="link"
            href={`https://github.com/${repo.full_name}`}
            className="link"
          >
            <span data-testid="repo-name">{repo.name}</span>
          </a>
        </div>
        <span data-testid="desc" className="description">{repo.description}</span>
      <div data-testid="flex" className="d-flex">
        {repo.language && (
          <div data-testid="item-1" className="subitem">
            <i className="fa fa-code pr-1" />
            <span>{repo.language}</span>
          </div>
        )}
        {repo.stargazers_count > 0 && (
          <div  data-testid="item-2" className="subitem">
            <i className="fa fa-star pr-1" />
            <span>{repo.stargazers_count}</span>
          </div>
        )}
        {repo.forks_count > 0 && (
          <div data-testid="item-3" className="subitem">
            <i className="fa fa-code-fork pr-1" />
            <span>{repo.forks_count}</span>
          </div>
        )}
        <div data-testid="item-4" className="subitem">
          <span>
            Updated{" "}
            {moment.utc(repo.pushed_at).local().startOf("seconds").fromNow()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Repository;

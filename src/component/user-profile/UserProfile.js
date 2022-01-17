import React from "react";
import "./UserProfile.css";

const UserProfile = ({ user = [], starredRepositories= [] }) => (
  <div data-testid="user" className="user__profile">
    <img
      data-testid="avatar"
      src={user.avatar_url}
      className="p-10 avatar"
      width="130"
      height="130"
      alt="User"
    />
    <div data-testid="stats" className="user__profileDetails">
      <h4 data-testid="name">{user.name}</h4>
      <h5 data-testid="login">{user.login}</h5>
      <h7 data-testid="bio">{user.bio}</h7>
      <div data-testid="profile" className="user__profile">
        <div data-testid="profile_detail" className="user__profileDetail">
          <i className="fa fa-group" />
          <span>{user.followers} Followers </span>
        </div>
        <div className="user__profileDetail">
          <i className="fa fa-heart mr-5" />
          <span>{user.following} Following</span>
        </div>
      </div>
      <div>
        {user.location && (
          <div className="user__profileDetail">
            <i className="fa fa-map-marker mr-5" />
            <span>{user.location}</span>
          </div>
        )}

        {user.blog && (
          <div className="user__profileDetail">
            <i className="fa fa-globe mr-5" />
            <span>{user.blog}</span>
          </div>
        )}

        {user.email && (
          <div className="user__profileDetail">
            <i className="fa fa-envelope mr-5" />
            <span>{user.email}</span>
          </div>
        )}
        {user.twitter_username && (
          <div className="user__profileDetail">
            <i className="fa fa-twitter mr-5" />
            <span>{user.twitter_username}</span>
          </div>
        )}

        {user.orgs && (
          <div className="user__profileDetail">
            <i className="fa fa-twitter mr-5" />
            <span>{user.orgs}</span>
          </div>
        )}
        {starredRepositories.length > 0 && (
          <div className="user__profileDetail">
            <i className="fa fa-star mr-5" />
            <span>{starredRepositories.length}</span>
          </div>
        )}
      </div>
    </div>
     
  </div>
);

export default UserProfile;

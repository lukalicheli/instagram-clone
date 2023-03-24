import React from "react";
import "./Suggestions.css";
import suggestionsData from "../../assets/post-data/SuggestionsData";
import myPic from "../../assets/profile-pic.jpeg";

function Suggestions() {
  return (
    <di className="suggestions-container">
      <div className="suggestions-header">
        <div className="suggestions-header-left">
          {" "}
          <img src={myPic} className="profile-pic"></img>
          <div className="name-username">
            <p>
              <b>lukalicheli</b>
            </p>
            <p className="full-name">
              <b>Luka Licheli</b>
            </p>
          </div>
        </div>
        <div className="suggestions-header-right">
          <p className="switch-button">
            <b>Switch</b>
          </p>
        </div>
      </div>
      <div className="suggestions-for-you-wrapper">
        <p className="suggestions-for-you">
          <b style={{ color: "grey" }}>Suggestions for you</b>
        </p>
        <p>
          <b style={{ fontSize: "12px" }}>See All</b>
        </p>
      </div>
      <div className="usernames-container">
        {suggestionsData.map((obj, index) => (
          <div className="usernames-wrapper">
            <div className="usernames-left">
              <img
                src={obj.profile}
                alt="suggestions"
                className="suggested-profile-pics"
              ></img>
              <div className="username-relationship-container">
                <p>
                  <b>
                    <b>{obj.username}</b>
                  </b>
                </p>
                <p style={{ color: "grey", lineWeight: "500" }}>
                  {obj.relationship}
                </p>
              </div>
            </div>{" "}
            <div className="follow-container">
              <p className="follow">
                <b>Follow</b>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="links-wrapper">
        <p className="links">
          About <span className="dot">.</span>Help Press API Jobs Privacy Terms
          Locations Language Meta Verified
        </p>
      </div>
      <div className="suggestions-footer-container">
        <p className="suggestions-footer">2023 INSTAGRAM FROM META</p>
      </div>
    </di>
  );
}

export default Suggestions;

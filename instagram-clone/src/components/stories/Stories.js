import React, { useRef } from "react";
import "./Stories.css";
import profilePictures from "../../assets/post-data/ProfilePictures";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

function Stories() {
  const storiesRef = useRef(null);

  const scrollRight = () => {
    storiesRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    storiesRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  return (
    <div className="stories-container">
      <FaChevronCircleLeft
        fill="white"
        className="left-button"
        onClick={scrollLeft}
      >
        &lt;
      </FaChevronCircleLeft>
      <div className="stories-wrapper" ref={storiesRef}>
        {profilePictures.map((obj, index) => (
          <div key={index}>
            <img src={obj.profile} alt="posts" />
            <p className="story-usernames">{obj.username}</p>
          </div>
        ))}
      </div>

      <FaChevronCircleRight
        fill="white"
        className="right-button"
        onClick={scrollRight}
      >
        &gt;
      </FaChevronCircleRight>
    </div>
  );
}

export default Stories;

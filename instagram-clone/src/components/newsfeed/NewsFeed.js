import React from "react";
import "./NewsFeed.css";
import postData from "../../assets/post-data/PostData";
import {
  CCard,
  CCardImage,
  CCardLink,
  CCardBody,
  CCardTitle,
} from "@coreui/react";

import { AiOutlineHeart } from "react-icons/ai";
import { IoChatbubbleOutline } from "react-icons/io5";
import { BsSend } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";

function NewsFeed() {
  return (
    <div className="newsfeed-container">
      <div className="newsfeed-wrapper">
        {postData.map((obj, index) => (
          <CCard
            style={{ width: "30rem", backgroundColor: "black", color: "white" }}
            key={index}
          >
            {" "}
            <CCardTitle style={{ backgroundColor: "black", height: "50px" }}>
              <div className="profile-image-container">
                <CCardImage src={obj.profile}></CCardImage>
              </div>{" "}
            </CCardTitle>
            <CCardBody className="card-body">
              <div className="post-image">
                <CCardImage src={obj.img} />
              </div>
            </CCardBody>
            <CCardBody style={{ padding: "0px" }} className="card-body">
              <div className="card-text">
                <div className="first-three-icons">
                  <AiOutlineHeart
                    className="heart-icon"
                    color="white"
                    style={{ marginRight: "10px", marginTop: "10px" }}
                    size={30}
                  ></AiOutlineHeart>
                  <IoChatbubbleOutline
                    className="comment-icon"
                    color="white"
                    size={30}
                    style={{ marginRight: "10px", marginTop: "10px" }}
                  ></IoChatbubbleOutline>
                  <BsSend
                    className="send-icon"
                    color="white"
                    size={30}
                    style={{ marginRight: "10px", marginTop: "10px" }}
                  ></BsSend>
                </div>
                <div className="bookmark-div">
                  <BiBookmark
                    className="bookmark-icon"
                    color="white"
                    size={30}
                    style={{ marginTop: "10px" }}
                  ></BiBookmark>
                </div>
              </div>
            </CCardBody>
            <CCardBody>
              <CCardLink href="#">Card link</CCardLink>
              <CCardLink href="#">Another link</CCardLink>
            </CCardBody>
          </CCard>
        ))}
      </div>
    </div>
  );
}

export default NewsFeed;

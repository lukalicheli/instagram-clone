import React from "react";
import "./NewsFeed.css";
import postData from "../../assets/post-data/PostData";
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CForm,
  CFormTextarea,
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
          <CCard className="card-container" key={index}>
            {" "}
            <CCardTitle className="card-header">
              <CCardImage
                className="header-image"
                src={obj.profile}
              ></CCardImage>
              <div className="header-username-container">
                <p className="header-username">
                  <b>{obj.username}</b>
                </p>
              </div>
            </CCardTitle>
            <CCardBody className="card-image-container">
              <CCardImage className="card-image" src={obj.img} />
            </CCardBody>
            <CCardBody className="interaction-container">
              <div className="first-three-icons">
                <AiOutlineHeart
                  className="heart-icon"
                  color="white"
                  size={26}
                ></AiOutlineHeart>
                <IoChatbubbleOutline
                  className="comment-icon"
                  color="white"
                  size={26}
                ></IoChatbubbleOutline>
                <BsSend className="send-icon" color="white" size={26}></BsSend>
              </div>
              <div className="bookmark-container">
                <BiBookmark
                  className="bookmark-icon"
                  color="white"
                  size={26}
                ></BiBookmark>
              </div>
            </CCardBody>
            <CCardBody className="likes-comments-container">
              <div className="likes-username-caption-container">
                <p className="likes">
                  <b>{obj.likes} likes</b>
                </p>
                <p className="username-caption">
                  <b>{obj.username}</b> {obj.caption}
                </p>
              </div>
              <div className="comment-container">
                <CForm className="comment-form-container">
                  <CFormTextarea
                    className="comment-form"
                    placeholder="Add a comment..."
                  ></CFormTextarea>
                </CForm>
              </div>
            </CCardBody>
          </CCard>
        ))}
      </div>
    </div>
  );
}

export default NewsFeed;

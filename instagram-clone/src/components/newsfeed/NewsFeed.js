import React from "react";
import "./NewsFeed.css";
import {
  CCard,
  CCardImage,
  CListGroup,
  CListGroupItem,
  CCardLink,
  CCardBody,
  CCardTitle,
  CCardText,
} from "@coreui/react";

import { AiOutlineHeart } from "react-icons/ai";
import { IoChatbubbleOutline } from "react-icons/io5";
import { BsSend } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";

function NewsFeed() {
  const imageAddress = [
    "https://wallpaper.dog/large/10839283.jpg",
    "https://assets.vogue.in/photos/5ce431b346cf5953f8b18c74/1:1/w_1080,h_1080,c_limit/featured.2.jpg",
    "https://cdn.thegameawards.com/1/2022/11/goty_eldenring-2.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlMFy2Jka3XLTgQXG8-IsQkIx-Br3Itb9TCw&usqp=CAU",
  ];

  return (
    <div className="newsfeed-container">
      <div className="newsfeed-wrapper">
        {imageAddress.map((url, index) => (
          <CCard
            style={{ width: "18rem", backgroundColor: "black", color: "white" }}
            key={index}
          >
            {" "}
            <CCardTitle style={{ backgroundColor: "black" }}>
              Card title
            </CCardTitle>
            <CCardImage orientation="top" src={url} />
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

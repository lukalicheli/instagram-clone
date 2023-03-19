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
          <CCard style={{ width: "18rem" }} key={index}>
            <CCardImage orientation="top" src={url} />
            <CCardBody>
              <CCardTitle>Card title</CCardTitle>
              <CCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CCardText>
            </CCardBody>
            <CListGroup flush>
              <CListGroupItem>Cras justo odio</CListGroupItem>
              <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
              <CListGroupItem>Vestibulum at eros</CListGroupItem>
            </CListGroup>
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

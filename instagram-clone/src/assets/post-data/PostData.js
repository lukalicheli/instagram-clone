import React from "react";
import pic1 from "../profile-pictures/elon-musk.jpeg";
import pic2 from "../profile-pictures/jeff-bezos.jpeg";
import pic3 from "../profile-pictures/mark-zuckerberg.webp";
import pic4 from "../profile-pictures/steve-jobs.jpeg";

const postData = [
  {
    profile: pic1,
    img: "https://wallpaper.dog/large/10839283.jpg",
    username: "elonmusk",
    likes: 597,
    caption: "DogeCoin is the future!",
  },
  {
    profile: pic2,
    img: "https://assets.vogue.in/photos/5ce431b346cf5953f8b18c74/1:1/w_1080,h_1080,c_limit/featured.2.jpg",
    username: "jeffbezos",
    likes: 123,
    caption: "I can deliver anything you want",
  },
  {
    profile: pic3,
    img: "https://cdn.thegameawards.com/1/2022/11/goty_eldenring-2.jpg",
    username: "zuck",
    likes: 900,
    caption: "You're going to facebook jail!",
  },
  {
    profile: pic4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlMFy2Jka3XLTgQXG8-IsQkIx-Br3Itb9TCw&usqp=CAU",
    username: "stevejobsok",
    likes: 345,
    caption: "All these new CEO's of apple got nothing on me",
  },
];

export default postData;

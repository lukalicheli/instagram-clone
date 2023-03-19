// import React from "react";
// import "./Stories.css";
// import picture1 from "../../assets/50cent.jpeg";
// import picture2 from "../../assets/adesanya.webp";
// import picture3 from "../../assets/alina-baraz.jpeg";
// import picture4 from "../../assets/andrew-schultz.jpeg";
// import picture5 from "../../assets/carrey.webp";
// import picture6 from "../../assets/duval.jpeg";
// import picture7 from "../../assets/elon-musk.jpeg";
// import picture8 from "../../assets/jeff-bezos.jpeg";
// import picture9 from "../../assets/joe-rogan.jpeg";
// import picture10 from "../../assets/jorja-smith.webp";
// import picture11 from "../../assets/mark-zuckerberg.webp";
// import picture12 from "../../assets/Metallica_logo.png";
// import picture13 from "../../assets/statham.jpeg";
// import picture14 from "../../assets/tom.webp";
// import picture15 from "../../assets/zura.jpeg";
// import picture16 from "../../assets/steve-jobs.jpeg";

// function Stories() {
//   const pictures = [
//     picture1,
//     picture2,
//     picture3,
//     picture4,
//     picture5,
//     picture6,
//     picture7,
//     picture8,
//     picture9,
//     picture10,
//     picture11,
//     picture12,
//     picture13,
//     picture14,
//     picture15,
//     picture16,
//   ];

//   return (
//     <div className="stories-wrapper">
//       <div className="stories-container">
//         {pictures.map((pic, index) => (
//           <img key={index} src={pic} alt={`Picture ${index}`}></img>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Stories;

import React, { useRef } from "react";
import "./Stories.css";
import picture1 from "../../assets/profile-pictures/50cent.jpeg";
import picture2 from "../../assets/profile-pictures/adesanya.webp";
import picture3 from "../../assets/profile-pictures/alina-baraz.jpeg";
import picture4 from "../../assets/profile-pictures/andrew-schultz.jpeg";
import picture5 from "../../assets/profile-pictures/carrey.webp";
import picture6 from "../../assets/profile-pictures/duval.jpeg";
import picture7 from "../../assets/profile-pictures/elon-musk.jpeg";
import picture8 from "../../assets/profile-pictures/jeff-bezos.jpeg";
import picture9 from "../../assets/profile-pictures/joe-rogan.jpeg";
import picture10 from "../../assets/profile-pictures/jorja-smith.webp";
import picture11 from "../../assets/profile-pictures/mark-zuckerberg.webp";
import picture12 from "../../assets/profile-pictures/Metallica_logo.png";
import picture13 from "../../assets/profile-pictures/statham.jpeg";
import picture14 from "../../assets/profile-pictures/tom.webp";
import picture15 from "../../assets/profile-pictures/zura.jpeg";
import picture16 from "../../assets/profile-pictures/steve-jobs.jpeg";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

function Stories() {
  const pictures = [
    picture1,
    picture2,
    picture3,
    picture4,
    picture5,
    picture6,
    picture7,
    picture8,
    picture9,
    picture10,
    picture11,
    picture12,
    picture13,
    picture14,
    picture15,
    picture16,
  ];

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
        className="stories-button left"
        onClick={scrollLeft}
      >
        &lt;
      </FaChevronCircleLeft>
      <div className="stories-wrapper" ref={storiesRef}>
        {pictures.map((pic, index) => (
          <img key={index} src={pic} alt={`Picture ${index}`} />
        ))}
      </div>

      <FaChevronCircleRight
        fill="white"
        className="stories-button right"
        onClick={scrollRight}
      >
        &gt;
      </FaChevronCircleRight>
    </div>
  );
}

export default Stories;

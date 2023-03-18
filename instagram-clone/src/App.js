import "./App.css";
import { GrHomeRounded, GrCompass } from "react-icons/gr";
import { GoSearch } from "react-icons/go";
import { ImCompass2 } from "react-icons/im";
import { BiMoviePlay } from "react-icons/bi";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineHeart, AiOutlineInstagram } from "react-icons/ai";
import { FiPlusSquare } from "react-icons/fi";
import { Link } from "react-router-dom";
import NewsFeed from "./components/newsfeed/NewsFeed";
import Stories from "./components/stories/Stories";

function App() {
  return (
    <div className="container">
      <nav className="nav-container">
        <ul>
          <Link to="/">
            <li>
              <AiOutlineInstagram
                className="ig-icon"
                href="#instagram"
                fill="white"
                size={30}
              >
                Instagram
              </AiOutlineInstagram>
            </li>
          </Link>
          <Link to="/">
            <li>
              <GrHomeRounded fill="white" href="#home" size={30}>
                Home
              </GrHomeRounded>
              <p className="icon-name">Home</p>
            </li>
          </Link>
          <li>
            <GoSearch href="#search" fill="white" size={30}>
              Search
            </GoSearch>
            <p className="icon-name">Search</p>
          </li>
          <Link to="explore">
            <li>
              <ImCompass2 href="#explore" fill="white" size={30}>
                Explore
              </ImCompass2>
              <p className="icon-name">Explore</p>
            </li>
          </Link>
          <li>
            <BiMoviePlay href="#reels" fill="white" size={30}>
              Reels
            </BiMoviePlay>
            <p className="icon-name">Reels</p>
          </li>
          <li>
            <RiMessengerLine href="#messages" fill="white" size={30}>
              Messages
            </RiMessengerLine>
            <p className="icon-name">Messages</p>
          </li>
          <li>
            <AiOutlineHeart href="#notifications" fill="white" size={30}>
              Notifications
            </AiOutlineHeart>
            <p className="icon-name">Notifications</p>
          </li>
          <li>
            <FiPlusSquare href="#create" color="white" size={30}>
              Create
            </FiPlusSquare>
            <p className="icon-name">Create</p>
          </li>
        </ul>
      </nav>
      <div className="right-app-container">
        <Stories></Stories>
        <NewsFeed></NewsFeed>
      </div>
    </div>
  );
}

export default App;

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
import "bootstrap/dist/css/bootstrap.min.css";
import Suggestions from "./components/suggestions/Suggestions";

function App() {
  return (
    <div className="app-container">
      <div className="nav-container">
        <div className="nav-title">
          <Link to="/">
            <AiOutlineInstagram
              className="ig-icon"
              href="#instagram"
              fill="white"
              size={28}
            >
              Instagram
            </AiOutlineInstagram>
          </Link>
        </div>
        <div className="nav-icons">
          <div>
            <Link to="/">
              <li>
                <GrHomeRounded fill="white" href="#home" size={25}>
                  Home
                </GrHomeRounded>
                <p className="icon-name">Home</p>
              </li>
            </Link>
            <li>
              <GoSearch href="#search" fill="white" size={25}>
                Search
              </GoSearch>
              <p className="icon-name">Search</p>
            </li>
            <Link to="explore">
              <li>
                <ImCompass2 href="#explore" fill="white" size={25}>
                  Explore
                </ImCompass2>
                <p className="icon-name">Explore</p>
              </li>
            </Link>
            <li>
              <BiMoviePlay href="#reels" fill="white" size={25}>
                Reels
              </BiMoviePlay>
              <p className="icon-name">Reels</p>
            </li>
            <li>
              <RiMessengerLine href="#messages" fill="white" size={25}>
                Messages
              </RiMessengerLine>
              <p className="icon-name">Messages</p>
            </li>
            <li>
              <AiOutlineHeart href="#notifications" fill="white" size={25}>
                Notifications
              </AiOutlineHeart>
              <p className="icon-name">Notifications</p>
            </li>
            <li>
              <FiPlusSquare href="#create" color="white" size={25}>
                Create
              </FiPlusSquare>
              <p className="icon-name">Create</p>
            </li>
          </div>
        </div>
        <div className="nav-more"></div>
      </div>

      <div className="middle-container">
        <div className="middle-wrapper">
          <Stories></Stories>
          <NewsFeed></NewsFeed>
        </div>
        <div className="suggestions-container">
          <Suggestions></Suggestions>
        </div>
      </div>
    </div>
  );
}

export default App;

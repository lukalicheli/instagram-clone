import "./App.css";
import { GrHomeRounded, GrCompass } from "react-icons/gr";
import { GoSearch } from "react-icons/go";
import { ImCompass2 } from "react-icons/im";
import { BiMoviePlay } from "react-icons/bi";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineHeart, AiOutlineInstagram } from "react-icons/ai";
import { FiPlusSquare } from "react-icons/fi";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
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
          <li>
            <GrHomeRounded fill="white" href="#home" size={30}>
              Home
            </GrHomeRounded>
            <p>Home</p>
          </li>
          <li>
            <GoSearch href="#search" fill="white" size={30}>
              Search
            </GoSearch>
            <p>Search</p>
          </li>
          <li>
            <ImCompass2 href="#explore" fill="white" size={30}>
              Explore
            </ImCompass2>
            <p>Explore</p>
          </li>
          <li>
            <BiMoviePlay href="#reels" fill="white" size={30}>
              Reels
            </BiMoviePlay>
            <p>Reels</p>
          </li>
          <li>
            <RiMessengerLine href="#messenger" fill="white" size={30}>
              Messenger
            </RiMessengerLine>
            <p>Messenger</p>
          </li>
          <li>
            <AiOutlineHeart href="#notifications" fill="white" size={30}>
              Notifications
            </AiOutlineHeart>
            <p>Notifications</p>
          </li>
          <li>
            <FiPlusSquare href="#create" color="white" size={30}>
              Create
            </FiPlusSquare>
            <p>Create</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;

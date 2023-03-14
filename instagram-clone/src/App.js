import "./App.css";
import { GrHomeRounded } from "react-icons/gr";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <GrHomeRounded className="icon" fill="white" href="#home" size={30}>
              Home
            </GrHomeRounded>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;

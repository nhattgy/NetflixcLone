import React from "react";
import ReactPlayer from "react-player";
import { FiPlay } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import "./Home.scss";
import Movies from "../Movies/Movies";

const Home = () => {
  return (
    <div>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url="https://vimeo.com/316941203"
          loop={true}
          playing={true}
          width="100%"
          height="100%"
        />
        <div className="text-home">
          <h1>Netflix with Together</h1>
          <br />
          <p className="text-p">
            Nudo collaborated with Sebastien Grainger of Death From Above 1979
            to provide the music to “Together", showcasing Netflix's divers
            content, and that when it comes to Netflix, you’re likely to share
            six shows in common with any other member, anywhere in the world.
          </p>
          <div className="button-container">
            <button className="play-button">
              <FiPlay style={{ backgroundColor: "transparent" }} /> Play
            </button>
            <button className="add-list-button">
              <FaPlus style={{ backgroundColor: "transparent" }} /> My List
            </button>
            <br />
            <div style={{ marginTop: "2rem", backgroundColor: "transparent" }}>
              <p className="text-p">
                DIRECTOR: Eva Michon PRODUCTION COMPANY: Ways & Means EXECUTIVE
                PRODUCERS: Lana Kim, Jett Steiger PRODUCER: Noah Thomason
                EDITOR: Lenny Messina DP: Ava Berkofsky
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Movies />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import "./Movie.scss";
import NetflixOriginals from "../../components/NetfilxOrginals/NetfilxOrginals";
import TopRatedMovie from "../../components/TopRated/TopRatedMovie";
import ActionMovie from "../../components/ActionMovie/ActionMovie";
import UpComming from "../../components/UpComming/UpComming";


const Movies = () => {
  return (
    <div className="movie-container">
      <div>
        <p className="movie-List">Popular On Netflix</p>
        <div>
          <NetflixOriginals />
        </div>
      </div>
      <div>
        <p className="movie-List">Top Rated</p>
        <div>
          <TopRatedMovie />
        </div>
      </div>
      <div>
        <p className="movie-List">Movie Action</p>
        <div>
          <ActionMovie />
        </div>
      </div>
      <div>
        <p className="movie-List">Up Coming on NetFlix</p>
        <UpComming />
      </div>
    </div>
  );
};

export default Movies;

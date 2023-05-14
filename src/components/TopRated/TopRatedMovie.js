import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { baseUrl } from "../store/config/config";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./TopRatedMovie.scss";
import { NavLink } from "react-router-dom";
import { TopRatedMoviess } from "../store/action/movieActions";

const TopRatedMovie = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((state) => state.topRatedMovies);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [direction, setDirection] = useState(null);
  const [displayedMovies, setDisplayedMovies] = useState([]);

  useEffect(() => {
    dispatch(TopRatedMoviess());
  }, [dispatch]);

  useEffect(() => {
    setDisplayedMovies(topRatedMovies.slice(currentIndex, currentIndex + 6));
  }, [topRatedMovies, currentIndex]);

  const handleNextClick = () => {
    if (!isSliding && currentIndex + 6 < topRatedMovies.length) {
      setIsSliding(true);
      setDirection("right");
      setTimeout(() => {
        setCurrentIndex(currentIndex + 6);
        setIsSliding(false);
      }, 500);
    }
  };

  const handlePrevClick = () => {
    if (!isSliding && currentIndex > 0) {
      setIsSliding(true);
      setDirection("left");
      setTimeout(() => {
        setCurrentIndex(currentIndex - 6);
        setIsSliding(false);
      }, 500);
    }
  };

  return (
    <div className="movie-container">
      <div
        className={`moviesContainer${isSliding ? ` sliding-${direction}` : ""}`}
      >
        {displayedMovies.map((movie) => (
          <div key={movie.id} className="movieItem">
            <NavLink to={`/detail/${movie.id}`} className="product-item">
              <img
                src={`${baseUrl}${movie.backdrop_path}`}
                alt={movie.name}
                className="movieImage"
              />
              <div className="titlecontainer">
                <div className="titlemovie">{movie.title}</div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
      <div className="buttonContainer">
        <button className="button-prev" onClick={handlePrevClick}>
          <FaChevronLeft className="iconreact" />
        </button>
        <button className="button-next" onClick={handleNextClick}>
          <FaChevronRight className="iconreact" />
        </button>
      </div>
    </div>
  );
};

export default TopRatedMovie;

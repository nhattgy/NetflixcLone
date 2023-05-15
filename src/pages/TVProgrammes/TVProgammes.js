import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { baseUrl } from "../../components/store/config/config";
import { ActionMvv } from "../../components/store/action/movieActions";
import "./TVprg.scss";

const TVProgammes = () => {
  const dispatch = useDispatch();
  const ActionMV = useSelector((state) => state.ActionMV);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [direction, setDirection] = useState(null);
  const [displayedMovies, setDisplayedMovies] = useState([]);

  useEffect(() => {
    dispatch(ActionMvv());
  }, [dispatch]);

  useEffect(() => {
    setDisplayedMovies(ActionMV.slice(currentIndex, currentIndex + 16));
  }, [ActionMV, currentIndex]);

  return (
    <div className="tv-programmes-container">
      <div className="movies-container">
        {displayedMovies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <NavLink to={`/detail/${movie.id}`} className="product-link">
              <img
                src={`${baseUrl}${movie.poster_path}`}
                alt={movie.name}
                className="movie-image"
              />
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TVProgammes;

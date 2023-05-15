import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { baseUrl } from "../../components/store/config/config";
import { fetchMovies } from "../../components/store/action/movieActions";

const Orginals = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [direction, setDirection] = useState(null);
  const [displayedMovies, setDisplayedMovies] = useState([]);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    setDisplayedMovies(movies.slice(currentIndex, currentIndex + 16));
  }, [movies, currentIndex]);

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

export default Orginals;

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { baseUrl } from "../../components/store/config/config";
import { UpCOmmingMV } from "../../components/store/action/movieActions";

const Films = () => {
  const dispatch = useDispatch();
  const UpCommingMv = useSelector((state) => state.UpCommingMv);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [direction, setDirection] = useState(null);
  const [displayedMovies, setDisplayedMovies] = useState([]);

  useEffect(() => {
    dispatch(UpCOmmingMV());
  }, [dispatch]);

  useEffect(() => {
    setDisplayedMovies(UpCommingMv.slice(currentIndex, currentIndex + 16));
  }, [UpCommingMv, currentIndex]);

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

export default Films;

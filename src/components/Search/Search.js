import React, { useState } from "react";
import axios from "axios";
import "./Search.scss"; // import CSS file
import { NavLink } from "react-router-dom";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Perform GET request with the search term
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1&include_adult=false&query=${searchTerm}`
      );

      // Update state with the retrieved movies
      setMovies(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input" // add class to input
        />
        <button type="submit" className="search-button">
          Search
        </button>{" "}
        {/* add class to button */}
      </form>
      {/* Display the retrieved movies */}
      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie.id} className="movie-item">
            {/* Append the poster path to the base image URL */}
            <div className="movie-poster">
              {movie.poster_path && (
                <NavLink to={`/detail/${movie.id}`} className="product-link">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                  />
                </NavLink>
              )}
            </div>
            <div className="movie-details">
              <h2 className="movie-title">{movie.title}</h2>
              {/* Add additional movie details here */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;

import axios from "axios";

export const fetchMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1 "
    );
    dispatch({ type: "FETCH_MOVIES", payload: response.data.results });
  } catch (error) {
    console.log(error);
  }
};

export const TopRatedMoviess = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=3 "
    );
    dispatch({ type: "TOP_RATED", payload: response.data.results });
  } catch (error) {
    console.log(error);
  }
};
export const ActionMvv = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "	https://api.themoviedb.org/3/movie/now_playing?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=3 "
    );
    dispatch({ type: "ACTION_MV", payload: response.data.results });
  } catch (error) {
    console.log(error);
  }
};
export const UpCOmmingMV = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "	https://api.themoviedb.org/3/movie/upcoming?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=2 "
    );
    dispatch({ type: "UP_COMMING", payload: response.data.results });
  } catch (error) {
    console.log(error);
  }
};
export const Action = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=e9e9d8da18ae29fc430845952232787c`
    );
    return response.data.cast;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const fetchMovie = async (id) => {
  try {
    const api_key = "e9e9d8da18ae29fc430845952232787c"; // Khóa API của bạn
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&append_to_response=videos`;
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

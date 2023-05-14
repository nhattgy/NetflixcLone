const initialState = {
  movies: [],
  topRatedMovies: [],
  ActionMV: [],
  UpCommingMv: [],
  ACTIONMV: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return { ...state, movies: action.payload };
    case "TOP_RATED":
      return { ...state, topRatedMovies: action.payload };
    case "ACTION_MV":
      return { ...state, ActionMV: action.payload };
    case "UP_COMMING":
      return { ...state, UpCommingMv: action.payload };
    case "AC_TION":
      return { ...state, ACTIONMV: action.payload };
    default:
      return state;
  }
};

export default movieReducer;

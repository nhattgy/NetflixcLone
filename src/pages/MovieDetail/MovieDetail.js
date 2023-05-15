import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MdDateRange } from "react-icons/md";
import moment from "moment";
import ReactModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import "./MovieDetail.scss";
import Cast from "../../components/Cast/Cast";
import { fetchMovie } from "../../components/store/action/movieActions";
import { useEffect } from "react";
import { baseUrl } from "../../components/store/config/config";

function MovieVideos({ movie }) {
  const [scrollLeft, setScrollLeft] = useState(0);

  function handleScroll(event) {
    const scrollLeft = event.target.scrollLeft;
    setScrollLeft(scrollLeft);
  }

  return (
    <div>
      {movie.videos && movie.videos.results.length > 0 && (
        <div>
          <h3>Video</h3>
          <div className="video-container">
            {movie.videos.results.slice(2, 8).map((video) => (
              <iframe
                key={video.id}
                src={`https://www.youtube.com/embed/${video.key}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={movie.title}
                width="300"
                height="300"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const MovieDetail = () => {
  const { id } = useParams();
  const movies = useSelector((state) => [
    ...state.movies,
    ...state.topRatedMovies,
    ...state.ActionMV,
    ...state.UpCommingMv,
  ]);
  const [movie, setMovie] = useState(null);
  const [youtubeVideoKey, setYoutubeVideoKey] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formattedDate = movie
    ? moment(movie.release_date).format("DD/MM/YYYY")
    : "";

  useEffect(() => {
    const fetchMovieData = async () => {
      const data = await fetchMovie(id);
      setMovie(data);
      if (data.videos && data.videos.results.length > 0) {
        // Retrieve the first video key
        setYoutubeVideoKey(data.videos.results[0].key);
      }
    };
    fetchMovieData();
  }, [id]);

  return (
    <div>
      {movie && (
        <>
          <div>
            <img
              src={`${baseUrl}${movie?.poster_path}`}
              alt={movie?.name}
              className="movieImages"
            />
          </div>
          <div className="movie-detail">
            <h2 className="title-detail">{movie?.title}</h2>
            <h2 className="date-detail">
              {" "}
              <MdDateRange /> Ngày Khởi Chiếu :{formattedDate}
            </h2>
            <p className="vote-textt">Đánh Giá :</p>
            <div className="vote-container">
              <div
                className="vote-progress"
                style={{ transform: `rotate(${movie.vote_average * 3.6}deg)` }}
              />
              <div className="vote-text">{movie.vote_average}</div>
            </div>
            <h3 className="overview">OverView</h3>
            <p className="orview-detail">{movie?.overview}</p>
            <div className="button-wrapper">
              <button
                className="buttonplay"
                onClick={() => setIsModalOpen(true)}
              >
                Xem Trailer
              </button>
            </div>
          </div>
          {/* render other movie details... */}
          <Cast />
          <ReactModalVideo
            channel="youtube"
            isOpen={isModalOpen}
            videoId={youtubeVideoKey}
            onClose={() => setIsModalOpen(false)}
          />
          <h1 style={{ color: "white", marginTop: "5rem", marginLeft: "2rem" }}>
            Review Fun Movie
          </h1>
          <MovieVideos movie={movie} />
        </>
      )}
    </div>
  );
};

export default MovieDetail;

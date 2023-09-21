
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../css/Home.css";

function Movie({ coverImg, title, summary, genres, movieId }) {
  return (
    <div className="movie-container">
      <img src={coverImg} alt={title} />
      <h2 className="movie-title" style={{ color: '#E74C3C' }}><Link to={'/' + movieId}>{title}</Link></h2>
      {summary.length < 200 ? (
        <p>{summary}</p>
      ) : (
        <p>{summary.split(' ').slice(0, 30).join(' ')}... </p>
      )}
      <div className="movie-tags">
        {genres.map((tag, index) => (
          <span key={index} className="movie-tag">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  movieId: PropTypes.number.isRequired,
}

export default Movie;
import React from "react";
import PropTypes from "prop-types";
import '../css/Detail.css';

function MovieDetail({ coverImg, title, summary, genres }) {


    return (
        <div className="detail-card">
            <img src={coverImg} alt={title} />
            <h2 className="movie-title">{title}</h2>
            <p>{summary}</p>
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

MovieDetail.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieDetail;

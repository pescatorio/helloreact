import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from '../components/MovieDetail';
import '../css/Detail.css';

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            // API에서 영화 데이터를 가져온 후 setMovies를 사용하여 전역 상태에 저장
            const response = await fetch(
                "https://yts.mx/api/v2/movie_details.json?movie_id="+id
            );
            const data = await response.json();
            setMovie(data.data.movie);
            setLoading(false);
        };

        fetchMovies();
    }, [setMovie]);

console.log(movie);
    return (
        <div className = "detail-container">
            {loading ? <h1>Loading....</h1> :
                movie ? (
                    <MovieDetail
                        coverImg={movie.medium_cover_image}
                        title={movie.title}
                        summary={movie.description_full}
                        genres={movie.genres}
                    />
                ) : (
                    <h1>Loading....</h1>
                )}
        </div>
    );
}

export default Detail;

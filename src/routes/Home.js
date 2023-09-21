import React, { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import '../css/Home.css'; // 

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            // API에서 영화 데이터를 가져온 후 setMovies를 사용하여 전역 상태에 저장
            const response = await fetch(
                'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
            );
            const data = await response.json();
            setMovies(data.data.movies);
            setLoading(false);
        };
        fetchMovies();
    }, [setMovies]);
    
    return (
        <div className="home-container"> {/* CSS 클래스 추가 */}
            {loading ? <h1>Loading....</h1> :
                movies.map((movie) => (
                    <div className="movie-card" key={movie.id}>
                        <Movie
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                            movieId={movie.id}
                        />
                    </div>
                ))}
        </div>
    );
}

export default Home;

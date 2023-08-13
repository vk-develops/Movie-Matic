import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div className="card">
            <div className="img-box">
                <img src={movie.Poster}  alt="Poster" />
            </div>
            <div className="card-contents">
                <div className="cat">
                    <h3 className="category"> {movie.Type} </h3>
                </div>
                <h1 className="heading"> {movie.Title} </h1>
                <div className="overlay">
                    <h5>IMDB id: {movie.imdbID} </h5>
                    <h5>YEAR: {movie.Year} </h5>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
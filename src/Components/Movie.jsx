import React from 'react';
import "./Movie.css";
import MovieCard from './MovieCard';
import { useState, useEffect } from 'react';

// //4e37068a
// const API_URI = "https://www.omdbapi.com/?apikey=4e37068a";

const movie = {
    "Title": "Thor: Ragnarok",
    "Year": "2017",
    "imdbID": "tt3501632",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg"
}

const Movie = () => {

    const movieSearch = async (movieTitle) => {
        const response = await fetch(`${import.meta.env.VITE_APP_API_URI}&s=${movieTitle}`);
        const data = await response.json();

        console.log(data.Search);

    }

    useEffect(() => {
        movieSearch("Thor");
    }, [])

    return (
        <section className="movie-section">
            <div className="movie-header">
                <div className="nav">
                    <h1 className="heading">MovieMatic.</h1>
                </div>
                <div className="inputs">
                    <input 
                        type="text" 
                        placeholder='Search for movies'
                        value="Thor"
                        onChange={() => movieSearch()}
                    />
                </div>
            </div>
            <div className="movies">
                <MovieCard movie={movie} />
            </div>
        </section>
    );
}

export default Movie;
import React from 'react';
import "./Movie.css";
import MovieCard from './MovieCard';
import { useState, useEffect } from 'react';

// //4e37068a
// const API_URI = "https://www.omdbapi.com/?apikey=4e37068a";

const Movie = () => {

    const movieSearch = async (movieTitle) => {
        const response = await fetch(`${import.meta.env.VITE_APP_API_URI}&s=${movieTitle}`);
        const data = await response.json();

        console.log(data.Search);

    }

    // useEffect(() => {
    //     movieSearch("Thor");
    // }, [])

    return (
        <section className="movie-section">
            <MovieCard />
        </section>
    );
}

export default Movie;
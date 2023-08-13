import React from 'react';
import "./Movie.css";
import MovieCard from './MovieCard';
import { useState, useEffect } from 'react';
import { BsSearch } from "react-icons/bs";
import SearchIcon from "../assets/Search.svg";
 
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

    const [ movies, setMovies ] = useState([]);
    const [ searchItem, setSearchItem ] = useState("");

    const movieSearch = async (movieTitle) => {
        const response = await fetch(`${import.meta.env.VITE_APP_API_URI}&s=${movieTitle}`);
        const data = await response.json();

        setMovies(data.Search);

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
                <div className="search">
                    <input 
                        type="text" 
                        placeholder="Search for movies"
                        value={searchItem}
                        onChange={(e) => {setSearchItem(e.target.value)}}
                    />
                    <img 
                        src={SearchIcon} 
                        alt="Search" 
                        onClick={() => {movieSearch(searchItem)}}
                    />
                </div>
            </div>
            {
                movies?.length > 0 ? (
                    <div className="movies">
                        {movies.map((movieItem) => (
                            <MovieCard movie={movieItem} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h1>No results found</h1>
                        <h3>Enter valid input search</h3>
                    </div>
                )
            }
        </section>
    );
}

export default Movie;
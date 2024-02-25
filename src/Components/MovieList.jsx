import React from "react";

const MovieList = ({ movies, onMovieClick }) => {
  return (
    <ul className="container">
      {movies.map((movie) => (
        <li key={movie.imdbID} onClick={() => onMovieClick(movie.imdbID)}>
          {movie.Title} ({movie.Year})
        </li>
      ))}
    </ul>
  );
};

export default MovieList;

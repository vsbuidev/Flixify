import React from "react";

const MovieDetail = ({ movie }) => {
  return (
    <div className="container movie-detail">
      <h2>{movie.Title}</h2>
      <p>{movie.Plot}</p>
      <p>Released: {movie.Released}</p>
      <p>Genre: {movie.Genre}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default MovieDetail;

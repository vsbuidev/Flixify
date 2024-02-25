import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import SearchForm from "./Components/SearchForm";
import MovieList from "./Components/MovieList";
import MovieDetail from "./Components/MovieDetail";
import "./styles.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const searchMovies = async (query) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${query}&apikey=353d01ac`
      );
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const getMovieDetails = async (imdbID) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?i=${imdbID}&apikey=353d01ac`
      );
      setSelectedMovie(response.data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  return (
    <Router>
      <div>
        <h1>Movie Search and Recommendation App</h1>
        <Switch>
          <Route exact path="/">
            <SearchForm onSearch={searchMovies} />
            <MovieList movies={movies} onMovieClick={getMovieDetails} />
          </Route>
          <Route path="/movie/:id">
            <MovieDetail movie={selectedMovie} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

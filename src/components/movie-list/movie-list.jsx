import React from 'react';
import PropTypes from "prop-types";
import MovieItem from "../movie-item/movie-item.jsx";

const MovieList = ({movies, goToMovie}) => {
  return (
    <div className="catalog__movies-list">
      {movies.map((movie, i) => (
        <MovieItem movie={movie} goToMovie={goToMovie} key={i}/>
      ))}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string).isRequired,
  goToMovie: PropTypes.func.isRequired
};

export default MovieList;

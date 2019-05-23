import React from 'react';
import PropTypes from "prop-types";
import MovieItem from "../movie-item/movie-item.jsx";

const MovieList = ({movies}) => {
  return (
    <div className="catalog__movies-list">
      {movies.map((movie, i) => (
        <MovieItem movie={movie} key={i}/>
      ))}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default MovieList;

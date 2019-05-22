import React from 'react';
import PropTypes from 'prop-types';
import GenreItem from "../genre-item/genre-item.jsx";

const GenreList = ({genres}) => {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, i) => (
        <GenreItem genre={genre} key={i} />
      ))}
    </ul>
  );
};

GenreList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default GenreList;

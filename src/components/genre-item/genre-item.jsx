import React from 'react';
import PropTypes from 'prop-types';

const GenreItem = ({genre}) => {
  return (
    <li className="catalog__genres-item">
      <a href="#" className="catalog__genres-link">{genre}</a>
    </li>
  );
};

GenreItem.propTypes = {
  genre: PropTypes.string.isRequired
};

export default GenreItem;

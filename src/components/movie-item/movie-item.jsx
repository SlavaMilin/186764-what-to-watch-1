import React from 'react';
import PropTypes from 'prop-types';

const MovieItem = ({movie, goToMovie}) => {
  return (
    <article className="small-movie-card catalog__movies-card">
      <button className="small-movie-card__play-btn" type="button">Play</button>
      <div className="small-movie-card__image">
        <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
          alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title" onClick={goToMovie}>
        <a className="small-movie-card__link" href="movie-page.html">{movie}</a>
      </h3>
    </article>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.string.isRequired,
  goToMovie: PropTypes.func.isRequired
};

export default MovieItem;

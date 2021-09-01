import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from '../movie-card/movie-card';

function CatalogMoviesList({ movies })  {
  return (
    <div className="catalog__films-list">
      {movies.map((movie) => <MovieCard key={movie} movie={movie}/>)}
    </div>
  );
}

CatalogMoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default CatalogMoviesList;

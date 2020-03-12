import React from 'react';
import PropTypes from 'prop-types';

function Movie({id, year, title, summary, poster, genres}){
  debugger
  return (
    <div className='movies__movie'>
      <img src={poster} alt={title} titie={title}></img>
      <h3 className='movie__title' style={{backgroundColor: 'red'}}>{title}</h3>
      <h5 className='movie__year'>{year}</h5>
      <p className='movie__summary'>{summary}</p>
      <ul className='genres'>
        {genres.map((genre, index) => 
          <li key={index} className="genres__genre">{genre}</li>
        )}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
}

export default Movie
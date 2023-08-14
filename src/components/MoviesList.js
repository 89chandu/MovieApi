import React from 'react';
import Movie from './Movie';
import classes from './MoviesList.module.css';

const MoviesList = (props) => {
  const deleteMovieHandler = async (id) => {
    if (window.confirm('Are you sure you want to delete this movie?')) {
      props.onDeleteMovie(id);
    }
  };

  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <li key={movie.id}>
          <Movie
            title={movie.title}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
          />
          <div>
            <button onClick={() => deleteMovieHandler(movie.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;

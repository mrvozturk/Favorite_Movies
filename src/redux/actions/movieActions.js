import {
  ADD_FAVORITE_MOVIE,
  RATE_MOVIE,
  REMOVE_FAVORITE_MOVIE,
} from "./actionTypes";

export const addFavoriteMovie = (movie) => ({
  type: ADD_FAVORITE_MOVIE,
  payload: {
    movie,
  },
});

export const removeFavoriteMovie = (movieId) => ({
  type: REMOVE_FAVORITE_MOVIE,
  payload: {
    movieId,
  },
});
export const rateMovie = (movieId, rating) => ({
  type: RATE_MOVIE,
  payload: {
    movieId,
    rating,
  },
});

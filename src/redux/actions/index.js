import constnats from '../constants';

export const toggleFavorite = movieId => ({
  type: constnats.TOGGLE_FAVORITE,
  payload: { movieId }
});

export const fetchDataSuccess = data => ({
  type: constnats.FETCH_DATA_SUCCESS,
  payload: data
});

export const fetchDataFailure = error => ({
  type: constnats.FETCH_DATA_FAILURE,
  payload: error
});

export const fetchData = () => dispatch => {
  const url = 'https://moviesdatabase.p.rapidapi.com/titles';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e968bb0b47mshc6c6ebc893887b8p1aa28bjsn0465a90e8c4b',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };

  fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(result => dispatch(fetchDataSuccess(result.results)))
    .catch(error => dispatch(fetchDataFailure(error)));
};

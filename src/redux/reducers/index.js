import constants from '../../constants';

const initialState = {
  data: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.TOGGLE_FAVORITE:
      state.data[action.payload.movieId].isFavorite = !state.data[
        action.payload.movieId
      ].isFavorite;
      return { ...state, data: [...state.data] };

    case constants.FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

export default rootReducer;

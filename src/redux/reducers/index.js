import constants from '../../constants';
import MockData from '../../data/mockData.json';

const initialState = {
  data: MockData,
  successData: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.TOGGLE_FAVORITE:
      state.data[action.payload.movieId].isFavorite = !state.data[action.payload.movieId].isFavorite;
      return { ...state, data: [...state.data] };

    case constants.FETCH_DATA_SUCCESS:

    return { ...state, successData: action.payload, data: action.payload };

    default:
      return state;
  }
};

export default rootReducer;

const initialState = {
  favorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites, action.payload.movieId],
      };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter(
          (id) => id !== action.payload.movieId
        ),
      };
    case "TOGGLE_FAVORITE":
      // favorites.includes(movieId) ifadesi, favorites dizisinin içinde movieId'yi arar. Eğer movieId dizide bulunuyorsa, includes fonksiyonu true değerini döndürür; aksi takdirde, yani movieId dizide bulunmuyorsa, false değerini döndürür.
      return {
        ...state,
        favorites: state.favorites.includes(action.payload.movieId)
          ? state.favorites.filter((id) => id !== action.payload.movieId)
          : [...state.favorites, action.payload.movieId],
      };
    default:
      return state;
  }
};

export default rootReducer;

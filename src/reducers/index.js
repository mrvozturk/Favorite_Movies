import MockData from '../data/mockData.json';
// başlangıçta favori olup olmadığını kontrol etmek için isfavorite alanı ekleniyo
const initialState = {
  data: MockData.map(item => ({ ...item, isFavorite: false }))
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      return {
        ...state,
        data: state.data.map(item =>
          item.id === action.payload.movieId
            ? { ...item, isFavorite: !item.isFavorite }
            : item
        )
      }; //  rootReducer içinde, TOGGLE_FAVORITE action'ı ile ilgili durum güncellemeleri yapılır. Eğer bu action tetiklenirse, her bir film nesnesi üzerinde gezinilir ve action'da belirtilen movieId ile eşleşen film bulunur. eğer film bulunursa false tersine döner
    default:
      return state;
  }
};

export default rootReducer;

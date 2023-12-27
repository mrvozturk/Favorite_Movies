```js

// combineReducers birden fazla reducerı tek bir ana reducer altında birleştiren fonksiyondur.Burada da iki reducerımız mevcut movieReducer,rootReducer1
//createStore redux kütüphanesinde bir fonksiyondur redux store oluşturmak için kullanılır
//rootreducerda ana reducer olarak adlandırılır birden fazla reducerı birleştirir ve genel durumu yönetir
//applyMiddleware asenkron işlemleri gerçekletirmek için kullanılır
import { movieReducer, rootReducer1 } from '../reducers';
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import { thunk } from 'redux-thunk';
/**
 * state => {movie,todos}
 * state.movie => movieInitialState nin state degerini dondurucek => {movie: MockData}
 */
const rootReducer = combineReducers({
  movie: movieReducer,
  todos: rootReducer1
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
```

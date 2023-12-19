import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../actions';
import unFavIcon from '../images/unFav.png';
import favIcon from '../images/fav.png';
import './styles.css';

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);
  // useSelector: Redux store'dan belirli bir veriyi çekmek için kullanılır.
  //state.data: Redux store'daki state nesnesinden sadece data öğesini çeker.
  //data: React bileşenindeki bu değişken, Redux store'daki güncel data özelliğini temsil eder.
  const handleToggleFavorite = movieId => {
    dispatch(toggleFavorite(movieId));
  };

  return (
    <div className='col'>
      <div className='movies-section'>
        <h3>Movies</h3>
        {data.map(item => (
          <div key={item.id} className='movie-item'>
            <img src={item.image} alt={item.title} className='movie-image' />
            <div className='movie-details'>
              <h5>Name: {item.title}</h5>
              <h5>Category: {item.categories}</h5>
              <h5>Year: {item.year}</h5>
              <h5>Director: {item.director}</h5>
            </div>
            <img
              onClick={() => handleToggleFavorite(item.id)}
              src={item.isFavorite ? favIcon : unFavIcon}
              alt={item.isFavorite ? 'fav icon' : 'unFav icon'}
              className='favorite-icon'
            />
          </div>
        ))}
      </div>

      <div className='favorites-section'>
        <h3>Favorite Movies</h3>
        {data
          .filter(item => item.isFavorite)
          .map(item => (
            <div key={item.id} className='favorite-item'>
              <img
                src={item.image}
                alt={item.title}
                className='favorite-image'
              />
              <div className='favorite-details'>
                <h5>Name: {item.title}</h5>
                <h5>Category: {item.categories}</h5>
                <h5>Year: {item.year}</h5>
                <h5>Director: {item.director}</h5>
              </div>
              <img
                onClick={() => handleToggleFavorite(item.id)}
                src={favIcon}
                alt='fav icon'
                className='favorite-icon'
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;

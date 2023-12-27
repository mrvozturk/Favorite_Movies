import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite, fetchData } from '../redux/actions';
import unFavIcon from './images/unFav.png';
import favIcon from './images/fav.png';
import './styles.css';

const App = () => {
  const dispatch = useDispatch();

  const data = useSelector(state => state.data);

  const handleToggleFavorite = movieIndex => {
    dispatch(toggleFavorite(movieIndex));
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className='col'>
      <div className='movies-section'>
        <h3>Movies</h3>

        {data.map((item, index) => (
          <div key={item.id} className='movie-item'>
            <img
              src={item.primaryImage?.url}
              alt={item.titleText.text}
              className='movie-image'
            />
            <div className='movie-details'>
              <h5>Name: {item.titleText.text}</h5>
              <h5>Category: {item.titleType.text}</h5>
              <h5>Year: {item.releaseYear.year}</h5>
              <h5>Director: {item.director}</h5>
            </div>
            <img
              onClick={() => handleToggleFavorite(index)}
              src={item.isFavorite ? favIcon : unFavIcon}
              alt={item.isFavorite ? 'fav icon' : 'unFav icon'}
              className='favorite-icon'
            />
          </div>
        ))}
      </div>

      <div className='favorites-section'>
        <h3>Favorite Movies</h3>
        {data.map((item, index) => {
          if (!item.isFavorite) return null;
          return (
            <div key={item.id} className='favorite-item'>
              <img
                src={item.primaryImage.url}
                alt={item.titleText.text}
                className='favorite-image'
              />
              <div className='favorite-details'>
                <h5>Name: {item.titleText.text}</h5>
                <h5>Category: {item.titleType.text}</h5>
                <h5>Year: {item.releaseYear.year}</h5>
                <h5>Director: {item.director}</h5>
              </div>
              <img
                onClick={() => handleToggleFavorite(index)}
                src={favIcon}
                alt='fav icon'
                className='favorite-icon'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "./actions";
import MockData from "./data/mockData.json";
import unFavIcon from "./images/unFav.png";
import favIcon from "./images/fav.png";

const App = () => {
  // useDispatch, Redux store ile etkileşimde bulunmamıza izin verir.
  // useSelector, Redux store'daki belirli bir parçayı seçmemize ve bu parçayı component içinde kullanmamıza olanak tanır.
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  // favori film listesini temsil eder,film id favoride olup olmadığına bakar
  const isFavorite = (movieId) => favorites.includes(movieId);
  //film id alır dispatch fonksiyonunda aksiyon tetikler
  const handleToggleFavorite = (movieId) => {
    dispatch(toggleFavorite(movieId));
  };

  return (
    <div className="col" style={{ display: "flex" }}>
      <div className="movies-section" style={{ flex: 1 }}>
        <h3 style={{ justifyContent: "center", display: "flex" }}>Movies</h3>
        {MockData.map((item) => (
          <div
            key={item.id}
            style={{
              flexDirection: "row",
              flexWrap: "nowrap",
              display: "flex",
              margin: 20,
              position: "relative",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                height: 150,
                width: 150,
                marginRight: 10,
                marginTop: 10,
              }}
            />
            <div style={{ flex: 1 }}>
              <h5>Name: {item.title}</h5>
              <h5>Category: {item.categories}</h5>
              <h5>Year: {item.year}</h5>
              <h5>Director: {item.director}</h5>
            </div>

            <img
              // Tıklama olayı gerçekleştiğinde, handleToggleFavorite fonksiyonu tetiklenir ve Redux store güncellenir.
              onClick={() => handleToggleFavorite(item.id)}
              src={isFavorite(item.id) ? favIcon : unFavIcon}
              alt={isFavorite(item.id) ? "fav icon" : "unFav icon"}
              style={{
                width: 30,
                height: 30,
                cursor: "pointer",
              }}
            />
          </div>
        ))}
      </div>

      <div className="favorites-section" style={{ flex: 1 }}>
        <h3
          style={{
            justifyContent: "center",
            display: "flex",
          }}
        >
          Favorite Movies
        </h3>
        {MockData.filter((item) => favorites.includes(item.id)).map((item) => (
          <div
            key={item.id}
            style={{
              flexDirection: "row",
              flexWrap: "nowrap",
              display: "flex",
              margin: 20,
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                height: 150,
                width: 150,
                marginRight: 10,
                marginTop: 10,
              }}
            />
            <div style={{ flex: 1 }}>
              <h5>Name: {item.title}</h5>
              <h5>Category: {item.categories}</h5>
              <h5>Year: {item.year}</h5>
              <h5>Director: {item.director}</h5>
            </div>
            <img
              onClick={() => handleToggleFavorite(item.id)}
              src={favIcon}
              alt="fav icon"
              style={{
                width: 30,
                height: 30,
                cursor: "pointer",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

import React from "react";
import MockData from "../data/mockData.json";
import unFavIcon from "../images/unFav.png";
import favIcon from "../images/fav.png";

function App() {
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
              onClick={() => window.open(item.url, "_blank")}
              src={unFavIcon}
              alt="unFav icon"
              style={{
                width: 30,
                height: 30,
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
        {MockData.map((item) => (
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
              onClick={() => window.open(item.url, "_blank")}
              src={favIcon}
              alt="fav icon"
              style={{
                width: 30,
                height: 30,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

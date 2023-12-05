import React from "react";
import MockData from "../data/mockData.json";
import LoveIcon from "../images/Love.png";
import FavoriteIcon from "../images/Favorite.png";

function App() {
  return (
    <div className="col" style={{ display: "flex" }}>
      <div className="movies-section">
        <h3 style={{ marginLeft: 68 }}>Movies</h3>
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
              style={{ height: 150, width: 150, marginRight: 10 }}
            />
            <div style={{ flex: 1, marginTop: -10 }}>
              <h5>Name: {item.title}</h5>
              <h5>Category: {item.categories}</h5>
              <h5>Year: {item.year}</h5>
              <h5>Director: {item.director}</h5>
              <img
                onClick={() => window.open(item.url, "_blank")}
                src={FavoriteIcon}
                alt="Favorite icon"
                style={{
                  position: "absolute",
                  top: 5,
                  left: 600,
                  fontSize: 20,
                  cursor: "pointer" 
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="favorites-section" style={{ marginLeft: 500 }}>
        <h3 style={{ marginLeft: 30 }}>Favorite Movies</h3>
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
              style={{ height: 150, width: 150, marginRight: 10 }}
            />

            <div style={{ flex: 1, marginTop: -10 }}>
              <h5>Name: {item.title}</h5>
              <h5>Category: {item.categories}</h5>
              <h5>Year: {item.year}</h5>
              <h5>Director: {item.director}</h5>
              <img
                onClick={() => window.open(item.url, "_blank")}
                src={LoveIcon}
                alt="Love icon"
                style={{
                  position: "absolute",
                  top: 5,
                  left: 600,
                  fontSize: 20,
                 cursor: "pointer" 
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

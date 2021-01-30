import React, { useContext, useEffect } from "react";
import { MoviesContext } from "../context/MoviesContext";
import Movie from "../components/Movie/Movie";
import Header from "../components/Header/Header";

function MyMovies() {
  const { myMovies, lastMovie, setMyMovies } = useContext(MoviesContext);

  const undoHandler = () => {
    setMyMovies([...myMovies, lastMovie]);
    console.log(myMovies, lastMovie);
  };

  return (
    <div>
      <Header />
      <div className="my-movies-container">
        <h2>My Movie List</h2>
        <div className="movie-container">
          {myMovies.map((movie) => (
            <Movie
              title={movie.title}
              pic={movie.pic}
              overview={movie.overview}
              key={movie.id}
              rating={movie.rating}
            />
          ))}
        </div>
        <div className="undo-btn">
          <button onClick={undoHandler}>Undo</button>
        </div>
      </div>
    </div>
  );
}

export default MyMovies;

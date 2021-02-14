import React, { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

import Header from "../components/Header/Header";
import TrackedMovie from "../components/Movie/TrackedMovie";

function MyMovies() {
  const { myMovies } = useContext(MoviesContext);

  return (
    <div>
      <Header />
      <div className="my-movies-container">
        <h2>My Movie List</h2>
        <div className="movie-container">
          {myMovies.map((movie) => (
            <TrackedMovie
              title={movie.title}
              pic={movie.pic}
              overview={movie.overview}
              key={movie.id}
              rating={movie.rating}
              id={movie.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyMovies;

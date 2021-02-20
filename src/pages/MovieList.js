import React, { useContext, useEffect } from "react";
import { MoviesContext } from "../context/MoviesContext";
import Movie from "../components/Movie/Movie";
import Header from "../components/Header/Header";

function MovieList() {
  const { fetchFeatured, movies } = useContext(MoviesContext);

  useEffect(() => {
    fetchFeatured();
  }, [fetchFeatured()]);

  return (
    <div>
      <Header />
      <div className="popular-movie-container">
        <h2>Current Popular Movies</h2>
        <div className="movie-container">
          {movies.map((movie) => (
            <Movie
              title={movie.title}
              pic={movie.poster_path}
              overview={movie.overview}
              key={movie.id}
              rating={movie.vote_average}
              id={movie.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;

import React, { createContext, useState } from "react";
import { config } from "./../config";

export const MoviesContext = createContext({
  fetchFeatured: () => [],
  fetchSearch: () => [],
});

export const MoviesProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [myMovies, setMyMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [lastMovie, setLastMovie] = useState("");

  const FEATURED_API =
    "https://api.themoviedb.org/3/discover/movie?sort_by?popularity.desc&api_key=" +
    config.api_key +
    "&";
  const SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?&api_key=" +
    config.api_key +
    "&query=";

  const fetchFeatured = async () => {
    const response = await fetch(FEATURED_API);
    const data = await response.json();
    // console.log(FEATURED_API);
    setMovies(data.results);
  };

  const fetchSearch = async (term) => {
    if (term.length > 0) {
      const response = await fetch(SEARCH_API + term);
      const data = await response.json();
      setMovies(data.results);
      setSearchTerm("");
    }
  };

  return (
    <MoviesContext.Provider
      value={{
        fetchSearch,
        fetchFeatured,
        movies,
        setMovies,
        searchTerm,
        setSearchTerm,
        myMovies,
        setMyMovies,
        lastMovie,
        setLastMovie,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

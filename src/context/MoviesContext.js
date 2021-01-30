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

  const FEATURED_API = config.FEATURED_API;

  const SEARCH_API = config.SEARCH_API;

  const fetchFeatured = async () => {
    const response = await fetch(FEATURED_API);
    const data = await response.json();
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

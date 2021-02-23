import React, { createContext, useState, useCallback } from "react";
import { config } from "./../ignored/config.js";

export const MoviesContext = createContext({
  fetchSearch: () => {},
  fetchFeatured: () => {},
  movies: [],
  setMovies: () => {},
  searchTerm: "",
  setSearchTerm: () => {},
  myMovies: [],
  setMyMovies: () => {},
  lastMovie: null,
  setLastMovie: () => {},
});
export const MoviesProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [myMovies, setMyMovies] = useState(() => {
    return JSON.parse(localStorage.getItem("myMovies")) || [];
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [lastMovie, setLastMovie] = useState("");
  console.log("rerender MoviesProvider");
  console.log("searchTerm", searchTerm);
  const FEATURED_API =
    "https://api.themoviedb.org/3/discover/movie?sort_by?popularity.desc&api_key=" +
    config.api_key;
  const SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?&api_key=" +
    config.api_key +
    "&query=";

  const fetchFeatured = useCallback(async () => {
    const response = await fetch(FEATURED_API);
    const data = await response.json();
    // console.log(FEATURED_API);
    setMovies(data.results);
  }, [setMovies, FEATURED_API]);

  const fetchSearch = useCallback(
    async (term) => {
      if (term.length > 0) {
        try {
          console.log(`callin fir ${term}`);
          const response = await fetch(SEARCH_API + term);
          let data = null;
          if (response.ok) {
            data = await response.json();
          }
          if (data?.results) {
            setMovies(data.results);
          } else {
            console.log("problem", data);
          }
          setSearchTerm("");
        } catch (err) {}
      }
    },
    [setMovies, setSearchTerm, SEARCH_API],
  );

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

import React, { createContext, useState } from "react";
import { config } from "./../config";
// import { useToasts } from "react-toast-notifications";

export const MoviesContext = createContext({
  fetchFeatured: () => [],
  fetchSearch: () => [],
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
  const [myReviews, setMyReviews] = useState("");
  // const { addToast } = useToasts();

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
    console.log("test");
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
        myReviews,
        setMyReviews,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

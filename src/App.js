import React from "react";
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";
// import { config } from "./config";
import { MoviesProvider } from "./context/MoviesContext";
import MovieList from "./pages/MovieList";
import MyMovies from "./pages/MyMovies";

// const FEATURED_API = config.FEATURED_API;
// const IMG_API = config.IMG_API;
// const SEARCH_API = config.SEARCH_API;

function App() {
  return (
    <Router>
      <MoviesProvider>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/my-movies" component={MyMovies} />
        </Switch>
      </MoviesProvider>
    </Router>
  );
}

export default App;

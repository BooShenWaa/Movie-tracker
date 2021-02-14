import React from "react";
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";
import { ToastProvider } from "react-toast-notifications";
import { MoviesProvider } from "./context/MoviesContext";
import MovieList from "./pages/MovieList";
import MyMovies from "./pages/MyMovies";

function App() {
  return (
    <Router>
      <ToastProvider autoDismiss={true}>
        <MoviesProvider>
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route exact path="/my-movies" component={MyMovies} />
          </Switch>
        </MoviesProvider>
      </ToastProvider>
    </Router>
  );
}

export default App;

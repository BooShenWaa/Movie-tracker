import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { MoviesContext } from "../../context/MoviesContext";

function Header() {
  const { fetchSearch, searchTerm, setSearchTerm, myMovies } = useContext(
    MoviesContext,
  );

  const movieCounter = myMovies.length;

  const submitHandler = (e) => {
    e.preventDefault();
    fetchSearch(searchTerm);
  };

  const onChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="header">
      <nav className="header-left">
        <NavLink to="/" className="nav-item">
          <h3>Popular Movies</h3>
        </NavLink>
        <NavLink to="/my-movies" className="nav-item">
          <h3>My Movies: {movieCounter}</h3>
        </NavLink>
      </nav>

      <div className="header-center ">
        <h1 className="page-logo"> My Movie Tracker </h1>
      </div>
      <div className="header-right">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            className="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={onChangeHandler}
          />
          <button type="submit">
            <SearchIcon />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;

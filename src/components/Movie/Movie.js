import React, { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

function Movie({ title, pic, overview, rating, id }) {
  const { myMovies, setMyMovies, lastMovie, setLastMovie } = useContext(
    MoviesContext,
  );

  const setVoteClass = (rating) => {
    if (rating >= 8) {
      return "green";
    } else if (rating >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  const clickHandler = () => {
    let indexOfId = myMovies.findIndex((i) => i.title === title);

    if (indexOfId === -1) {
      setMyMovies([
        ...myMovies,
        {
          id: id,
          title: title,
          pic: pic,
          rating: rating,
          overview: overview,
        },
      ]);
    } else {
      let filtered = myMovies.filter(function (el) {
        return el.title !== title;
      });
      setLastMovie(myMovies[indexOfId]);
      console.log(lastMovie);
      setMyMovies(filtered);
    }
  };

  return (
    <div className="movie" onClick={clickHandler}>
      <img
        src={
          pic
            ? IMG_API + pic
            : "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
        }
        alt={title}
      />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={`rating ${setVoteClass(rating)}`}>
          <h4>{rating}</h4>
        </span>
      </div>
      <div className="movie-overview">
        <h3>Overview:</h3>
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default Movie;

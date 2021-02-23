import React, { useContext } from "react";
import ReactStars from "react-rating-stars-component";
import { MoviesContext } from "../../context/MoviesContext.js";

function StarRating({ id, myRating }) {
  const { myMovies } = useContext(MoviesContext);

  const myCurrentRating = () => {
    let obj = myMovies.find((el) => el.id === id);
    if (obj) {
      // console.log(obj.myRating);
      return obj.myRating;
    }
  };

  const starConfig = {
    size: 30,
    count: 5,
    value: myCurrentRating(),
    activeColor: "#ffd700",
    isHalf: true,
    onChange: (newValue) => {
      console.log(`Example 2: new value is ${newValue}`);

      let obj = myMovies.find((el) => el.id === id);
      if (obj) {
        obj.myRating = newValue;
        // console.log(obj);
      }

      localStorage.setItem("myMovies", JSON.stringify(myMovies));
    },
  };

  return (
    <div className="star-rating-section">
      <h4 className="star-heading">Your movie rating</h4>
      <ReactStars {...starConfig} />
    </div>
  );
}

export default StarRating;

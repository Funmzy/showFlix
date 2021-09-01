import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./movieCard.module.css";

const MovieCard = () => {
  const location = useLocation();

  return (
    <div className={classes.card}>
      <Link to={{ pathname: "/movies-detail/test", state: { background: location } }}>
        <img
          src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
          alt="Img"
          className={classes["card-img"]}
        />
      </Link>
      <button className={classes["card-btn"]}>View</button>
    </div>
  );
};

export default MovieCard;

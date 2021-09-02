import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./movieCard.module.css";

const MovieCard = ({ movie }) => {
  const location = useLocation();

  return (
    <div className={classes.card}>
      <Link
        to={{
          pathname: `/movies-detail/${movie.imdbID}`,
          state: { background: location },
        }}
      >
        <img
          src={`${movie.Poster}`}
          alt="Img"
          className={classes["card-img"]}
        />
      </Link>
      <Link to={`/movie/${movie.imdbID} `} className={classes["card-btn"]}>
        View
      </Link>
    </div>
  );
};

export default MovieCard;

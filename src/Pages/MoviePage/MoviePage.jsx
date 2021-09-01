import React from "react";
import classes from "./moviePage.module.css";
import {
  AiOutlineClockCircle,
  AiOutlineStar,
  AiOutlineHeart,
} from "react-icons/ai";
import { FiPlay } from "react-icons/fi";
import MovieCard from "../../components/movieCard/MovieCard";

const MoviePage = () => {
  return (
    <div className={classes["root"]}>
      <div className={classes["current-movie"]}>
        <figure className={classes["current-img-box"]}>
          <img
            className={classes["current-img"]}
            src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
            alt="kio"
          />
        </figure>
        <div className={classes["movie-detail"]}>
          <h2 className={classes["movie-title"]}>Mortal Kombat</h2>
          <p className={classes["movie-plot"]}>
            The Guardians struggle to keep together as a team while dealing with
            their personal family issues, notably Star-Lord's encounter with his
            father the ambitious celestial being Ego."
          </p>

          <ul className={classes["movie-props"]}>
            <li className={classes["movie-props-item"]}>
              <AiOutlineClockCircle className={classes["movie-icon"]} />
              <p className={classes["movie-text"]}>23 April 2021</p>
            </li>
            <li className={classes["movie-props-item"]}>
              <AiOutlineStar className={classes["movie-icon"]} />
              <p className={classes["movie-text"]}>6.2</p>
            </li>
            <li className={classes["movie-props-item"]}>
              <FiPlay className={classes["movie-icon"]} />
              <p className={classes["movie-text"]}>1hr 50mins</p>
            </li>
          </ul>
          <div className={classes["movie-actions"]}>
            <button className={classes["watch-btn"]}>Watch Now</button>
            <div className={classes["heart-box"]}>
              <AiOutlineHeart className={classes["heart-icon"]} />
            </div>
          </div>
        </div>
      </div>
      <div className={classes["similar-movie"]}>
        <h className={classes["movie-title"]}>Similar Movies</h>
        <div className={classes["similar-movies-container"]}>
          <div className={classes["card-wrapper"]}>
            <MovieCard />
          </div>
          <div className={classes["card-wrapper"]}>
            <MovieCard />
          </div>
          <div className={classes["card-wrapper"]}>
            <MovieCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;

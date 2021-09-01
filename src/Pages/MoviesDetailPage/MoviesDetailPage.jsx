import React from "react";
import classes from "./movieDetail.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { useHistory } from "react-router-dom";

const MoviesDetailPage = () => {
  const history = useHistory();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className={classes["root"]}>
      <div className={classes["content"]}>
        <div
          className={classes["space"]}
          onClick={() => history.goBack()}
        ></div>
        <div className={classes["modal"]}>
          <div
            className={classes["arrow-box"]}
            onClick={() => history.goBack()}
          >
            <BsArrowLeft className={classes["arrow-back"]} />
          </div>
          <figure className={classes["img-box"]}>
            <img
              className={classes["img"]}
              src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
              alt="i"
            />
          </figure>
          <h3 className={classes["title"]}>Mortal Combat</h3>
          <p className={classes["text"]}>
            The Guardians struggle to keep together as a team while dealing with
            their personal family issues, notably Star-Lord's encounter with his
            father the ambitious celestial being Ego."
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviesDetailPage;

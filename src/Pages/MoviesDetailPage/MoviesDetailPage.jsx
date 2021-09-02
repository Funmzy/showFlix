import React, { useEffect } from "react";
import classes from "./movieDetail.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { asyncGetMovie, removeMovie } from "../../redux/actions/movie.action";

const MoviesDetailPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie.movie);
  const isGettingMovie = useSelector((state) => state.movie.isGettingMovie);
  const movieErrMsg = useSelector((state) => state.movie.getMovieError);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add("overflow-hidden");

    dispatch(asyncGetMovie(`${id}`));

    return () => {
      document.body.classList.remove("overflow-hidden");
      dispatch(removeMovie());
    };
  }, [dispatch, id]);

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
          {isGettingMovie && !movieErrMsg && !movie && <h1>LOADING......</h1>}
          {!isGettingMovie && movie && !movieErrMsg && (
            <div>
              <figure className={classes["img-box"]}>
                <img
                  className={classes["img"]}
                  src={`${movie.Poster}`}
                  alt="i"
                />
              </figure>
              <h3 className={classes["title"]}>{movie.Title}</h3>
              <p className={classes["text"]}>{movie.Plot}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoviesDetailPage;

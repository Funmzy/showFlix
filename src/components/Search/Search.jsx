import React from "react";
import classes from "./search.module.css";
import searchIcon from "../../assets/Search.svg";

const Search = () => {
  return (
    <div>
      <h2 className={classes["search-title"]}>Explore</h2>
      <form className={classes["form"]}>
        <div className={classes["input-container"]}>
          <img
            src={searchIcon}
            alt="search"
            className={classes["search-icon"]}
          />
          <input
            className={classes["search-input"]}
            type="search"
            name="search"
          />
        </div>
        <button className={classes["search-btn"]}>search</button>
      </form>
    </div>
  );
};

export default Search;

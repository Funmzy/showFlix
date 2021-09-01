import classes from "./homepage.module.css";
import Search from "../../components/Search/Search";
import MovieCard from "../../components/movieCard/MovieCard"; 

const HomePage = () => {
  return (
    <div>
      <Search />
      <div className={classes["search-result"]}>
        <p className={classes["search-res"]}>Results for:</p>
        <h4 className={classes["search-title"]}>Mortal Kombat</h4>
      </div>
      <div className={classes["movies-result"]}>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default HomePage;

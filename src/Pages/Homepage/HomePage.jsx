import classes from "./homepage.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Search from "../../components/Search/Search";
import MovieCard from "../../components/movieCard/MovieCard";

const HomePage = () => {
  return (
    <div className={classes.home}>
      <nav className={classes.sidebar}>
        <h1 className={classes["sidebar-title"]}>
          Show<span className={classes["sidebar-title-span"]}>Flix</span>
        </h1>
        <Sidebar />
      </nav>
      <main className={classes.search}>
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
      </main>
    </div>
  );
};

export default HomePage;

import React from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import HomePage from "../Pages/Homepage/HomePage";
import MoviesDetailPage from "../Pages/MoviesDetailPage/MoviesDetailPage";

const Routes = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <React.Fragment>
      <Switch location={background || location}>
        <Route exact path="/" component={HomePage} />
        <Redirect to="/" />
      </Switch>
      {background && (
        <Route path="/movies-detail/:id" children={<MoviesDetailPage />} />
      )}
    </React.Fragment>
  );
};

export default Routes;

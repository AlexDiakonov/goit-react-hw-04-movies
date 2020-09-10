import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import style from "./styles/spinner.module.css";
import Navbar from "./components/Navbar.jsx";
import Spinner from "./components/Spinner.jsx";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  const { home, movies, movieDetails } = routes;
  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <div className={style.spinner}>
            <Spinner />
          </div>
        }
      >
        <Switch>
          <Route
            exact
            path={home.path}
            component={home.component}
          />
          <Route
            exact
            path={movies.path}
            component={movies.component}
          />
          <Route
            path={movieDetails.path}
            component={movieDetails.component}
          />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;

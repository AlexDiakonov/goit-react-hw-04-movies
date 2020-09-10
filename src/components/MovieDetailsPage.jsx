import React, { Component } from "react";
import fetchById from "../APIservice/fetchTvShows";
import routes from "../routes";
import { Route, Link } from "react-router-dom";
import style from "../styles/movieDetails.module.css";

export default class MovieDeatails extends Component {
  state = { movieAbout: {}, error: null };

  componentDidMount() {
    fetchById
      .fetchMoviebyId(this.props.match.params.movieId)
      .then((movieAbout) => this.setState({ movieAbout }))
      .catch((error) => this.setState({ error }));
  }
  handleGoBack = () => {
    if (
      this.props.location.state &&
      this.props.location.state.from
    ) {
      this.props.history.push(
        this.props.location.state.from
      );
    } else {
      this.props.history.push("/");
    }
  };
  render() {
    const { movieAbout } = this.state;

    return (
      <div className={style.detailsCont}>
        <button
          className={style.btn}
          onClick={this.handleGoBack}
        >
          &#9756; Go Back
        </button>
        <div className={style.mainInfoCont}>
          <div className={style.imgCont}>
            {movieAbout.poster_path ? (
              <img
                className={style.moviePoster}
                src={`https://image.tmdb.org/t/p/w500/${movieAbout.poster_path}`}
                alt=""
              />
            ) : (
              <img
                className={style.moviePoster}
                width="200px"
                height="300px"
                src="https://memegenerator.net/img/instances/28752176/stupid-server-y-u-no-bring-extra-ranch-for-mah-faht-ass.jpg"
                alt="server is stupid"
              />
            )}
          </div>
          <div className={style.infoCont}>
            <h2 className={style.movieTitle}>
              {movieAbout.title}
            </h2>
            <span className={style.score}>
              User score:{" "}
              {Math.round(movieAbout.vote_average * 10)}%
            </span>
            <h3>Overview</h3>
            <p className={style.movieOverview}>
              {movieAbout.overview}
            </p>
            <h4>Genres</h4>
            <ul>
              {movieAbout.genres ? (
                movieAbout.genres.map((gen) => (
                  <li key={gen.id}>
                    <span className={style.genItem}>
                      {gen.name}
                    </span>
                  </li>
                ))
              ) : (
                <span>No gens availible</span>
              )}
            </ul>
          </div>
        </div>

        <div>
          <h3 className={style.addInfo}>
            Additional information
          </h3>
          <div className={style.linksCont}>
            <Link
              className={style.link}
              to={{
                pathname: `${this.props.match.url}/cast`,
                state: { id: movieAbout.id },
              }}
            >
              Cast
            </Link>
            <Link
              className={style.link}
              to={{
                pathname: `${this.props.match.url}/reviews`,
                state: { id: movieAbout.id },
              }}
            >
              Reviews
            </Link>
          </div>
        </div>
        <Route
          path={routes.cast.path}
          component={routes.cast.component}
          exact
        />
        <Route
          path={routes.reviews.path}
          component={routes.reviews.component}
          exact
        />
      </div>
    );
  }
}

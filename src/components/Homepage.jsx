import React, { Component } from "react";
import fetch from "../APIservice/fetchTvShows";
import { Link } from "react-router-dom";
import style from "../styles/home.module.css";
export default class Homepage extends Component {
  state = { movieInfo: [], error: null };
  componentDidMount() {
    fetch
      .fetchdDailyPopular()
      .then((res) =>
        this.setState({ movieInfo: res.results })
      )
      .catch((error) => this.setState({ error }));
  }
  render() {
    const { movieInfo } = this.state;
    console.log(movieInfo);
    return (
      <div>
        <h1 className={style.homeTitle}>
          Trending Today!
        </h1>
        <ul className={style.homeContainer}>
          {movieInfo.map((movie) => (
            <li className={style.homeItem} key={movie.id}>
              <Link
                className={style.homeLink}
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: this.props.location },
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt=""
                />
                <div className={style.movieTitleCont}>
                  {movie.title ? (
                    <h2 className={style.movieTitle}>
                      {movie.title}
                    </h2>
                  ) : (
                    <h2 className={style.movieTitle}>
                      {movie.name}
                    </h2>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

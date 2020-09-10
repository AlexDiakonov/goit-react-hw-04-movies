import React, { Component } from "react";
import { Link } from "react-router-dom";
import fetchByName from "../APIservice/fetchTvShows";
import getQueryParams from "../Utils/getQuery";
import style from "../styles/movies.module.css";
export default class Movies extends Component {
  state = { value: "", shows: null, error: null };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push({
      ...this.props.location,
      search: `query=${this.state.value}`,
    });
    this.setState({ value: "" });
  };
  componentDidMount() {
    const { query } = getQueryParams(
      this.props.location.search
    );
    if (query) {
      fetchByName
        .fetchMovieByName(query)
        .then((findedShows) =>
          this.setState({
            shows: findedShows.results,
          })
        )
        .catch((error) => this.setState({ error }));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(
      prevProps.location.search
    );
    const { query: nextQuery } = getQueryParams(
      this.props.location.search
    );
    if (prevQuery !== nextQuery) {
      fetchByName
        .fetchMovieByName(nextQuery)
        .then((findedShows) =>
          this.setState({
            shows: findedShows.results,
          })
        )
        .catch((error) => this.setState({ error }));
    }
  }
  render() {
    const { shows } = this.state;
    const { match } = this.props;
    return (
      <div className={style.movieCont}>
        <div className={style.formCont}>
          <form onSubmit={this.handleSubmit}>
            <input
              className={style.input}
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            ></input>
            <button className={style.btn} type="submit">
              Search movie
            </button>
          </form>
        </div>

        <ul className={style.itemContainer}>
          {shows ? (
            shows.map((show) => (
              <li
                className={style.movieItem}
                key={show.id}
              >
                <Link
                  className={style.moviesLink}
                  to={{
                    pathname: `${match.path}/${show.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  {show.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w300/${show.poster_path}`}
                      alt=""
                      height="450px"
                    />
                  ) : (
                    <img
                      width="300px"
                      height="450px"
                      src="https://memegenerator.net/img/instances/28752176/stupid-server-y-u-no-bring-extra-ranch-for-mah-faht-ass.jpg"
                      alt="server is stupid"
                    />
                  )}
                  <div className={style.movieTitleCont}>
                    {show.title ? (
                      <h2 className={style.movieTitle}>
                        {show.title}
                      </h2>
                    ) : (
                      <h2 className={style.movieTitle}>
                        {show.name}
                      </h2>
                    )}
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <p className={style.inputDecription}>
              Which movie are you looking for?
            </p>
          )}
        </ul>
      </div>
    );
  }
}

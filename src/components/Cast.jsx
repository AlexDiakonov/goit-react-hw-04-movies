import React, { Component } from "react";
import fetchTvShows from "../APIservice/fetchTvShows";
import style from "../styles/cast.module.css";
export default class Cast extends Component {
  state = { cast: null, error: null };
  componentDidMount() {
    const id = this.props.location.state.id;
    fetchTvShows
      .fetchMovieCast(id)
      .then((cas) => this.setState({ cast: cas.cast }))
      .catch((error) => this.setState({ error }));
  }
  render() {
    const { cast } = this.state;
    return (
      <>
        <ul className={style.castList}>
          {cast ? (
            cast.map((cas) => (
              <li className={style.castItem} key={cas.id}>
                {cas.profile_path ? (
                  <img
                    className={style.castImg}
                    width="170px"
                    src={`https://image.tmdb.org/t/p/w400/${cas.profile_path}`}
                    alt={cas.name}
                  />
                ) : (
                  <img
                    className={style.castImg}
                    width="170px"
                    src={`https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png}`}
                    alt={cas.name}
                  />
                )}

                <p className={style.name}>{cas.name}</p>
                <p className={style.role}>
                  Role - {cas.character}
                </p>
              </li>
            ))
          ) : (
            <span>This API SUCK</span>
          )}
        </ul>
      </>
    );
  }
}

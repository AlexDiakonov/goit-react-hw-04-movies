import React, { Component } from "react";
import fetchReview from "../APIservice/fetchTvShows";
import style from "../styles/reviews.module.css";
export default class Reviews extends Component {
  state = { reviews: [], error: null };
  componentDidMount() {
    const id = this.props.location.state.id;

    fetchReview
      .fetchMovieReviews(id)
      .then((res) =>
        this.setState({ reviews: res.results })
      )
      .catch((error) => this.setState({ error }));
  }
  render() {
    const { reviews } = this.state;
    return (
      <>
        <ul>
          {reviews && reviews.length < 1 ? (
            <p className={style.rev}>
              Sorry, but this api suck real bad, and thats
              why here is no reviews
            </p>
          ) : (
            reviews.map((rev) => (
              <li className={style.revItem} key={rev.id}>
                <h3 className={style.author}>
                  Author: {rev.author}
                </h3>
                <p className={style.rev}>{rev.content}</p>
              </li>
            ))
          )}
        </ul>
      </>
    );
  }
}

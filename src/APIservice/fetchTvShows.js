const apiKey = "563a9840b53628f14ad53b02b6a455a1";

const fetchdDailyPopular = (qurey) => {
  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`
  ).then((trends) => trends.json());
};
const fetchMoviebyId = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
  ).then((movie) => movie.json());
};

const fetchMovieByName = (name) => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${name}`
  ).then((films) => films.json());
};

const fetchMovieCast = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
  ).then((cast) => cast.json());
};
const fetchMovieReviews = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}`
  ).then((cast) => cast.json());
};

export default {
  fetchdDailyPopular,
  fetchMoviebyId,
  fetchMovieByName,
  fetchMovieCast,
  fetchMovieReviews,
};

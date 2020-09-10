import { lazy } from "react";

import Cast from "./components/Cast.jsx";
import Reviews from "./components/Reviews";

export default {
  home: {
    path: "/",
    component: lazy(() =>
      import("./components/Homepage.jsx")
    ),
  },

  movieDetails: {
    path: "/movies/:movieId",
    component: lazy(() =>
      import("./components/MovieDetailsPage.jsx")
    ),
  },

  movies: {
    path: "/movies",
    component: lazy(() =>
      import("./components/Movies.jsx")
    ),
  },
  cast: {
    path: "/movies/:id/cast",
    component: Cast,
  },

  reviews: {
    path: "/movies/:id/reviews",
    component: Reviews,
  },
};

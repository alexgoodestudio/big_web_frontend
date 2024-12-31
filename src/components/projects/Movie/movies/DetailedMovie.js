import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../../portfoliolayout/Footer";
import AverageRating from "../movie/AverageRating";

function DetailedMovie({ movie }) {
  return (
    <section className="row mt-4 text-dark">
      <article className="col-sm-12 col-md-6 col-lg-3">
        <img
          alt={`${movie.title} Poster`}
          className="rounded"
          src={movie.image_url}
          style={{ width: "100%" }}
        />
      </article>
      <aside className="col-sm-12 col-md-6 col-lg-9">
        <h3 className="font-poppins-heading mb-4">{movie.title}</h3>
        <p>{movie.description}</p>
        <p>
          <strong>Runtime:</strong> {movie.runtime} minutes
        </p>
        <p>
          <strong>Rating:</strong> {movie.rating}
        </p>
        <AverageRating reviews={movie.reviews} />
        <Link to={`/movie/movies/${movie.movie_id}`} className="btn btn-primary">
          See More
        </Link>
      </aside>
      <Footer/>
    </section>
  );
}

export default DetailedMovie;

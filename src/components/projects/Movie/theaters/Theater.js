import React from "react";
import { Link } from "react-router-dom";

function Theater({ theater }) {
  return (
    <article className="col-12 mb-4 text-dark">
      <div className="row">
        <aside className="col-12 col-md-6">
          <h2>{theater.name}</h2>
          <address>
            {theater.address_line_1}
            <br />
            {theater.address_line_2 ? theater.address_line_2 : null}
            {theater.city}, {theater.state} {theater.zip}
          </address>
        </aside>
        <section className="col-12 col-md-6">
          <div className="row">
            {theater.movies.map((movie) => (
              <div key={movie.movie_id} className="col-6 col-md-4 col-lg-2">
                <Link to={`/movie/movies/${movie.movie_id}`}>
                  <img
                    alt={`${movie.title} Poster`}
                    src={movie.image_url}
                    className="w-100"
                  />
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}

export default Theater;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("https://we-love-movies-backend-57kd.onrender.com/movies");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Movies Data:", data.data);
        setMovies(data.data);
      } catch (err) {
        console.error("Error fetching movies:", err);
        setError(err.message || "Something went wrong");
        setMovies([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!movies.length) return <div>No movies found.</div>;

  return (
    <main className="container mt-3 text-dark">
      <h2 className="font-poppins ">Now Showing</h2>
      <hr />
      <section className="row">
        {movies.map((movie) => (
          movie.movie_id ? (
            <article key={movie.movie_id} className="col-sm-12 col-md-6 col-lg-3 my-2">
              <Link to={`/movie/movies/${movie.movie_id}`} className="movie-link">
                <img
                  alt={`${movie.title} Poster`} 
                  className="rounded img-fluid"
                  src={movie.image_url} 
                  loading="lazy"
                />
              </Link>
              <h3 className="font-poppins-heading text-center mt-2">{movie.title}</h3>
            </article>
          ) : (
            <div key={movie.title || Math.random()} className="col-sm-12">
              <p>Movie data is incomplete</p>
            </div>
          )
        ))}
      </section>
      
    </main>
  );
}

export default MoviesList;

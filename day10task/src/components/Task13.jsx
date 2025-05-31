import React, { useState } from 'react';

const Task13 = () => {
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState(null);

  const searchMovie = async () => {
    const res = await fetch(`https://www.omdbapi.com/?t=${query}&apikey=YOUR_OMDB_API_KEY`);
    const data = await res.json();
    setMovie(data);
  };

  return (
    <div className="task">
      <h2>Task13: Movie Search App</h2>
      <input
        type="text"
        placeholder="Enter movie name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchMovie}>Search</button>
      {movie && movie.Response !== "False" ? (
        <div>
          <h3>{movie.Title}</h3>
          <p>{movie.Plot}</p>
          <img src={movie.Poster} alt={movie.Title} width="150" />
        </div>
      ) : movie && <p>Movie not found</p>}
    </div>
  );
};

export default Task13;

import React from 'react';
import './style.css';

const MovieLayout = ({ moviesList, addMovie }) => {
  let rows = [];
  rows.push(
    <tr>
      <th>Movie Name</th>
      <th>Poster</th>
      <th>Year of Release</th>
      <th>Plot</th>
      <th>Cast</th>
      <th>Edit</th>
    </tr>
  );
  for (var i = 0; i < moviesList.length; i++) {
    let cell = [];
    for (var obj in moviesList[i]) {
      if (obj !== 'id') {
        cell.push(
          <td>
            {obj === 'poster' ? (
              <img src={moviesList[i][obj]} className="poster-image" alt="" />
            ) : (
              moviesList[i][obj]
            )}
          </td>
        );
      }
    }
    cell = [...cell, <td>edit</td>];
    rows.push(<tr key={i}>{cell}</tr>);
  }

  return (
    <div className="movie-layout">
      <div className="header-text">
        <h1>Top 10 movies 2018</h1>
        <button onClick={addMovie} className="add-movie">
          +Movie
        </button>
      </div>
      <table id="simple-board">
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default MovieLayout;

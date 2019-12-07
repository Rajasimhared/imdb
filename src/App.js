import React from 'react';
import Header from './components/Header';
import MovieLayout from './layouts/MovieLayout';
import AddNewMovie from './layouts/AddNewMovie';
import { MoviesObject } from './utils/utils';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesList: MoviesObject,
      filterList: MoviesObject,
      showMovies: true
    };
  }

  addMovie = () => {
    const { showMovies } = this.state;
    this.setState({ showMovies: !showMovies });
  };

  addMovieToList = movie => {
    const { moviesList, showMovies } = this.state;
    const newMovie = { id: moviesList.length, ...movie };
    this.setState({
      moviesList: [...moviesList, newMovie],
      filterList: [...moviesList, newMovie],
      showMovies: !showMovies
    });
  };

  handleSearch = value => {
    const { moviesList } = this.state;
    let searchValue = value.toLowerCase();
    let filterList = moviesList.filter(movie =>
      movie.movie_name.toLowerCase().includes(searchValue)
    );
    this.setState({ filterList });
  };

  render() {
    const { showMovies, filterList, moviesList } = this.state;
    return (
      <div className="App">
        <Header searchKey={this.handleSearch} />
        {showMovies ? (
          <MovieLayout moviesList={filterList} addMovie={this.addMovie} />
        ) : (
          <AddNewMovie
            addMovie={this.addMovie}
            addMovieToList={this.addMovieToList}
          />
        )}
      </div>
    );
  }
}

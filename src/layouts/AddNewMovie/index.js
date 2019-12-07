import React from 'react';
import './style.css';

export default class AddNewMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }

  handleSubmit = event => {
    const { error, poster, name, year, plot, cast } = this.state;
    const { addMovieToList } = this.props;
    event.preventDefault();
    if (!error) {
      const newMovie = {
        poster,
        movie_name: name,
        year_of_release: year,
        plot,
        cast
      };
      addMovieToList(newMovie);
    }
  };

  handleName = e => {
    this.setState({ name: e.target.value });
  };

  handleYear = e => {
    const value = e.target.value;
    if (/^[0-9]{4}$/.test(value)) {
      this.setState({ year: value, error: false });
    } else {
      this.setState({ error: true });
      console.log('error');
    }
  };

  handlePlot = e => {
    this.setState({ plot: e.target.value });
  };

  handlePoster = e => {
    const value = e.target.value;
    if (/^(http|https):/.test(value))
      this.setState({ poster: value, error: false });
    else {
      this.setState({ error: true });
      console.log('error');
    }
  };

  handleCast = e => {
    this.setState({ cast: e.target.value });
  };

  handleCancel = e => {
    const { addMovie } = this.props;
    if (window.confirm('Do you want to cancel, you will lose the data?')) {
      addMovie();
    }
  };

  render() {
    return (
      <div className="new-movie">
        <h1>Add New Movie</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <span> Movie Name </span>
            <input type="text" onChange={this.handleName} />
          </label>
          <label>
            <span>Year of Release</span>
            <input type="text" onChange={this.handleYear} />
          </label>
          <label>
            <span>Plot</span> <input type="text" onChange={this.handlePlot} />
          </label>
          <label>
            <span> Poster </span>
            <input type="text" onChange={this.handlePoster} />
          </label>
          <label>
            <span>Cast</span> <input type="text" onChange={this.handleCast} />
            <button>+ Actor</button>
          </label>
          <input type="submit" value="Save" className="submit" />
          <input
            type="button"
            value="Cancel"
            className="cancel"
            onClick={this.handleCancel}
          />
        </form>
      </div>
    );
  }
}

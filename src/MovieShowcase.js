import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

// return movieData.map((data, idx) => <MovieCard key={idx} {...data} />);  
export default class MovieShowcase extends Component {

  generateMovieCards = (props) => {
    return movieData.map(function (data, index) {
      return <MovieCard key={index} {...data} />
    })
  };

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

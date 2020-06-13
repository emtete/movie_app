import React from "react";
import axios from "axios";
import Movie from "./Movie";
import styled from "styled-components";

interface State {
  isLoading?: boolean;
  movies?: Array<MovieData>;
}

interface Props {}

interface MovieData {
  title: string;
  id: number;
  year: number;
  summary: string;
  medium_cover_image: string;
}

class App extends React.Component<State, Props> {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json");
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div className='container'>
        {isLoading ? (
          <div className='loader'>
            <span className='loader__text'>loading...</span>
          </div>
        ) : (
          <div className='movies'>
            {movies.map((movie: MovieData) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  medium_cover_image={movie.medium_cover_image}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default App;

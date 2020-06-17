import React from "react";
import axios, { AxiosResponse } from "axios";
import Movie from "./Movie";
import styled from "styled-components";

interface iState {
  isLoading: boolean;
  movies: Array<MovieData>;
}

interface Props {}

interface MovieData {
  title: string;
  id: number;
  year: number;
  summary: string;
  medium_cover_image: string;
}

class App extends React.Component<Props, iState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isLoading: true,
      movies: [],
    };
  }

  getMovies = () => {
    new Promise(() => {
      axios
        .get("https://yts.mx/api/v2/list_movies.json")
        .then((resp: AxiosResponse) => {
          //
          const {
            data: {
              data: { movies },
            },
          } = resp;

          this.setState({ movies, isLoading: false });
        })
        .catch(() => {
          this.setState({ isLoading: true });
        });
    });
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

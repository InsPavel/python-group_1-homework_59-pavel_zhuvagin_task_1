import React, {Component, Fragment} from 'react';
import './MovieForm.css'
import Movie from "../../components/Movie/Movie";


class MovieForm extends Component {
    state ={
        movies: [
            {id: 1, movie: 'Зелёная книга'},
            {id: 2, movie: 'Астрал'},
        ],
        currentMovie: {movie: ''},
    };

    deleteMovie = (id) => {
        let movieId = this.state.movies.findIndex(movie =>
            movie.id === id
        );

        const movies = [...this.state.movies];
        movies.splice(movieId, 1);

        this.setState({movies})
        };

    changeMovieInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        let currentMovie = {
            ...this.state.currentMovie,
            [name]: value
        };

        this.setState({
            ...this.state,
            currentMovie
        });
    };

    addMovie = (event) => {
        event.preventDefault();
        let movie = {...this.state.currentMovie};
        const now = new Date();
        movie.id = now.getDate();
        let movies = [...this.state.movies, movie];
        this.setState({
            ...this.state,
            movies,
            currentMovie: {movie: ''}
        });
    };

    render() {
        return (
            <Fragment>
                <div className="my_container">
                    <form className="add">
                        <input type="text" name="movie" value={this.state.currentMovie.movie} onChange={this.changeMovieInput}/>
                        <button type="submit" onClick={this.addMovie}>Добавить</button>
                    </form>
                    {this.state.movies.map((movie) => {
                    return <Movie
                        {...movie}
                        key={movie.id}
                        onDelete={() => this.deleteMovie(movie.id)}
                    />
                })}
                </div>
            </Fragment>
        )
    }
}

export default MovieForm;
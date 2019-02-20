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

    changeName = (event, id) => {

        let movieId = this.state.movies.findIndex(movie => {
            return movie.id === id;
        });

        let movie = {
            ...this.state.movies[movieId],
            movie: event.target.value
        };

        let movies = [...this.state.movies];
        movies[movieId] = movie;

        this.setState({
            ...this.state,
            movies
        })
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
                    <form>
                        <div className="add row">
                            <div className="col col-10">
                        <input type="text" name="movie" value={this.state.currentMovie.movie} onChange={this.changeMovieInput}/>
                            </div>
                            <div className="col col-2">
                        <button type="submit" onClick={this.addMovie}>Добавить</button>
                                </div>
                            </div>
                    </form>
                    <h2>Список фильмов</h2>
                    {this.state.movies.map((movie) => {
                    return <Movie
                        {...movie}
                        key={movie.id}
                        onDelete={() => this.deleteMovie(movie.id)}
                        change={event => this.changeName(event, movie.id)}
                    />
                })}
                </div>
            </Fragment>
        )
    }
}

export default MovieForm;
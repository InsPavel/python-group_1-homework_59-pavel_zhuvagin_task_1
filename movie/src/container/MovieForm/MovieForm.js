import React, {Component, Fragment} from 'react';
import './MovieForm.css'
import Movie from "../../components/Movie/Movie";


class MovieForm extends Component {
    state ={
        movies: [
            {id: 1, movie: 'Зелёная книга'},
            {id: 2, movie: 'Астрал'},
        ],
        currentMovie: {movie: ' '},
    };

    constructor(props) {
        super(props);
        console.log('[MovieForm] constructor');
        console.log('[MovieForm] State exists: ', this.state.movies.length > 0);
    }

    componentDidMount() {
        console.log('[MovieForm] DidMount');
    }


    deleteMovie = (id) => {
        let movieId = this.state.movies.findIndex(movie =>
            movie.id === id
        );

        localStorage.removeItem(id);

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

        let movie_string = JSON.stringify(movie);
        localStorage.setItem(movie.id, movie_string);

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
        movie.id = now.getTime();
        let movies = [...this.state.movies, movie];
        let movie_string = JSON.stringify(movie);
        localStorage.setItem(movie.id, movie_string);
        this.setState({
            ...this.state,
            movies,
            currentMovie: {movie: ''}
        });
    };

    isAddButtonDisabled = () => {
        return this.state.currentMovie.movie === ' '
    };

    render() {
        console.log('[MovieForm] render');
        return (
            <Fragment>
                <div className="my_container">
                    <form>
                        <div className="add row">
                            <div className="col col-10">
                        <input type="text" name="movie" value={this.state.currentMovie.movie} onChange={this.changeMovieInput}/>
                            </div>
                            <div className="col col-2">
                        <button type="submit" disabled={this.isAddButtonDisabled()} onClick={this.addMovie}>Добавить</button>
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
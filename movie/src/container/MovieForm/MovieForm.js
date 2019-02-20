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

    render() {
        return (
            <Fragment>
                <div className="my_container">
                    <form className="add">
                        <input type="text" name="movie"/>
                        <button type="submit" >Добавить</button>
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
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

    render() {
        return (
            <Fragment>
                <div className="container">
                    <form className="add">
                        <input type="text" name="movie"/>
                        <button type="submit" >Добавить</button>
                    </form>
                    {this.state.movies.map((movie) => {
                    return <Movie
                        {...movie}
                        key={movie.id}
                    />
                })}
                </div>
            </Fragment>
        )
    }
}

export default MovieForm;
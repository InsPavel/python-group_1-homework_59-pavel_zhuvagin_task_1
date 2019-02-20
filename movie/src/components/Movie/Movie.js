import React, {Component} from 'react';
import './Movie.css'

class Movie extends Component {
    render(){
        return (
            <div className="movie">
                <p>{this.props.movie}</p>
                <button>Delete</button>
            </div>
        )
    }
}

export default Movie;
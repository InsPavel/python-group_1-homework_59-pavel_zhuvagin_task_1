import React, {Component} from 'react';
import './Movie.css'

class Movie extends Component {
    render(){
        return (
            <div className="row">
                <div className="movie col col-10">
                    <p>{this.props.movie}</p>
                </div>
                <div className="delete col col-2" onClick={this.props.onDelete}><p>x</p></div>
            </div>
        )
    }
}

export default Movie;
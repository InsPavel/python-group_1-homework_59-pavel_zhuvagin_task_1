import React, {Component} from 'react';
import './Movie.css'
import Button from "./Button/Button";

class Movie extends Component {
    componentDidMount() {
        console.log('[Movie] DidMount');
    }

    componentDidUpdate() {
        console.log('[Movie] DidUpdate');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Movie] ShouldUpdate');
        return nextProps.movie !== this.props.movie
    }


    render(){
        console.log('[Movie] render');

        return (
            <div className="row">
                <div className="movie col col-10">
                    <input type="text" value={this.props.movie} onChange={this.props.change}/>
                </div>
                <div className="col col-2">
                    <Button onDelete={this.props.onDelete}/>
                </div>
            </div>
        )
    }
}

export default Movie;
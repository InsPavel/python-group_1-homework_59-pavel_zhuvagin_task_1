import React, {Component} from 'react';
import './Movie.css'

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
                <div className="delete col col-2" onClick={this.props.onDelete}><p>x</p></div>
            </div>
        )
    }
}

export default Movie;
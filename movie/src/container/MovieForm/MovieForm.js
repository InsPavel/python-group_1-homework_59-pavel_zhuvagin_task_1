import React, {Component, Fragment} from 'react';
import './MovieForm.css'


class MovieForm extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <form className="add">
                        <input type="text" name="task"/>
                        <button type="submit" >Добавить</button>
                    </form>
                </div>
            </Fragment>
        )
    }
}

export default MovieForm;
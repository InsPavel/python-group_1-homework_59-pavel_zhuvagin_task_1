import React, {Component} from 'react';
import './Button.css'

class Button extends Component {
    render(){
        return(
            <div className="delete" onClick={this.props.onDelete}><p>x</p></div>
        )
    }
}

export default Button;
import React, { Component } from 'react';

class Button extends Component {
    state = {  }
    render() { 
        return ( 
            <button className={`btn btn-primary ${this.props.btnStyle}`} type={this.props.btnType}>{this.props.btnText}</button>
         );
    }
}
 
export default Button;
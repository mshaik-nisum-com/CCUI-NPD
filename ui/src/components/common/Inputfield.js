import React, { Component } from 'react';

class Inputfield extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <label className={`form-label ${this.props.noLabel ? this.props.noLabel : ''}`} htmlFor={this.props.elId}>{this.props.labelText}</label>
                <input id={this.props.elId} type={this.props.inputType} className={`form-control ${this.props.inputStyle}`} />
            </div>
         );
    }
}
 
export default Inputfield;
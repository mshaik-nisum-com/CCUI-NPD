import React, { Component } from 'react';

class Countrieslist extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <label className={`form-label ${this.props.noLabel ? this.props.noLabel : ''}`} htmlFor={this.props.elId}>{this.props.labelText}</label>
                <select id={this.props.elId} className="form-control" onChange={this.props.onChangeMarket}>
                    <option>Choose Market</option>
                    <option>United States</option>
                    <option>New York</option>
                </select>
            </div>
         );
    }
}
 
export default Countrieslist;
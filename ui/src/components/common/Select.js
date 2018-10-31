import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Select extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.fetchData();
    }
    render() {
        let list
        let listOfItems
        if (this.props.options) {
            list = this.props.options;
            listOfItems = list.map((item) => {
                debugger
                return (
                    // <option key={item.key} value={item.key}>{item.value}</option>
                    <option key={item.key} value={item.key} selected={this.props && this.props.marketVal === item.key}>{item.value}</option>
                )
            })
        } else {
            return (
                <option>Loading.....</option>
            );
        }
        return (
            <div>
                <label className={`form-label ${this.props.noLabel ? this.props.noLabel : ''}`} >{this.props.labelText}</label>
                <select className="form-control" onChange={this.props.onChangeHandler}>
                    <option>-- Select --</option>
                    {listOfItems}
                </select>
            </div>
        );
    }
}
Select.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.number.isRequired,
            value: PropTypes.string.isRequired
        })
    )
};
export default Select;
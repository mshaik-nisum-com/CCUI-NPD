import React, { Component } from 'react';
import Footer from '../footer';
import TabsComponent from '../tabs/index';
import Brands from '../brands'

class Mainbody extends Component {
	state = {
		arr: ['Create an Order', 'Order and Customer Maintenance', 'Alert Management'],
		arr2: ['Brands', 'Button', 'Button']
	};
	render() {
		return (
			<div className="container-fluid">
				<h4>Order</h4>
				<TabsComponent arr={this.state.arr} arr1={this.state.arr2} />
				<Footer />
			</div>
		);
	}
}

export default Mainbody;

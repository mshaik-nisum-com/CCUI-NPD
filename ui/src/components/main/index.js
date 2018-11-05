import React, { Component } from 'react';
import Footer from '../footer';
import TabsComponent from '../tabs/index';
import Brands from '../brands/Brands';

class Main extends Component {

	constructor(props) {
		super(props);
		this.state = {
			tabNames: ['Create an Order', 'Order and Customer Maintenance', 'Alert Management'],
			componentNames: ['Brands', 'Button', 'Button']
		};
	}

	render() {
		return (
			<div className="container-fluid">
				<TabsComponent inputParams={this.state} />
				<Footer />
			</div>
		);
	}
}

export default Main;

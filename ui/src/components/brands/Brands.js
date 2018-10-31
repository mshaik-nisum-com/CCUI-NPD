import React, { Component } from 'react';

class Brands extends Component {
	constructor(props) {
		super(props);
		this.isBrandSelected = false;
	}
	componentDidMount() {
		this.props.fetchBrands();
	}

	onBrandSelect = (e, brand) => {
		e.preventDefault();
		this.isBrandSelected = true;
		this.props.orderNumberGenerator(brand);
	}
	render() {
		const brandsList = this.props.brandsList ? this.props.brandsList : [];
		return (
			<div className="container brands-list">
				{brandsList.map((brand, index) => {
					return (
						<div className="card card-orders" key={index} onClick={(e) => this.onBrandSelect(e, brand)}>
							<div className="card-body">
								<h6 className="card-title"></h6>
								<p className="card-text">{brand.brandShortName}</p>
							</div>
						</div>
					)
				})}
			</div>
		);
	}
}

export default Brands;



import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBrandsFromCountryId } from '../../middlewares/brands';

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
	}
	render() {
		console.log("props", this.props);
		const brandsList = this.props.brandsList ? this.props.brandsList : [];
		return (
			<div className="container brands-list">
				{brandsList.map((brand, index) => {
					return (
						<div className="card card-orders" key={index} onClick={(e) => this.onBrandSelect(e, brand)}>
							<div className="card-body">
								<h6 className="card-title">Card Title</h6>
								<p className="card-text">{brand.brandShortName}</p>
							</div>
						</div>
					)
				})}
			</div>
		);
	}
}


const mapStateToProps = (state) => {
	return state.brandsReducer
};

const mapDispatchToProps = {
	fetchBrands: getBrandsFromCountryId
}

export default connect(mapStateToProps, mapDispatchToProps)(Brands);

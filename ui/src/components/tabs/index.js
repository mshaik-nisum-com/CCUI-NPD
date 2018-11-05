import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-tabs/style/react-tabs.css';
import BrandsContainer from '../../containers/BrandsContainer';
import BrandNav from '../brandNav';
import SideNav from '../sideNav';

class TabsComponent extends Component {
	constructor(props) {
		super(props);
		this.state = { activeIndex: 0 };
	}
	tabsToBeDisable = (e) => {
		e.preventDefault();
	};

	render() {
		return (<Tabs selectedIndex={this.state.activeIndex} onSelect={(activeIndex) => this.setState({ activeIndex })}>
			<TabList>{this.props.inputParams.tabNames.map((tabData, index) => <Tab key={index} disabled={index == 0 ? false : true}>{tabData}</Tab>)}</TabList>
			{this.props.inputParams.componentNames.map((panelData, index) => {
				let Component;
				switch (panelData) {
					case "Brands":
						Component =
							<div >
								{(this.props.orderDetails && this.props.orderDetails.orderNumber) ? <BrandNav orderDetails={this.props.orderDetails ? this.props.orderDetails : ''} /> : ''}

								{(this.props.orderDetails && this.props.orderDetails.orderNumber) ? <SideNav /> : ''}
								{(this.props.orderDetails && this.props.orderDetails.orderNumber) ? '' : <BrandsContainer />}
							</div>;

						break;
					default:
						Component = <div><button>Submit</button></div>;
				}
				return (
					<TabPanel key={index}>
						{Component}
					</TabPanel>
				);
			})}
		</Tabs>
		);
	}
}

const mapStateToProps = state => {
	return { orderDetails: state.orderNumberReducer }
}
export default connect(mapStateToProps)(TabsComponent)



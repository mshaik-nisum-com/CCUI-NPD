import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React, { Component } from 'react';
import 'react-tabs/style/react-tabs.css';
import BrandsContainer from '../../containers/BrandsContainer';
import Button from '../common/Button';

export default class TabsComponent extends Component {
	constructor(props) {
		super(props);
		this.state = { activeIndex: 0 };
	}
	tabsToBeDisable = (e) => {
		e.preventDefault();
	};

	render() {
	return (
		<Tabs selectedIndex={this.state.activeIndex} onSelect={(activeIndex) => this.setState({ activeIndex })}>		
                <TabList>{this.props.inputParams.tabNames.map((tabData, index) => {
				return (
					<Tab key={index}  disabled={index == 0 ? false : true}>{tabData}</Tab>
				);
			})}
		</TabList>
		{this.props.inputParams.componentNames.map((panelData, index) => {
			let Component ;
			switch(panelData) {
				case "Brands":
				Component =  BrandsContainer;
					break;
				default:
				Component =  Button;
			}
				return (
					<TabPanel key={index}>
						<Component btnText={panelData} />
					</TabPanel>
				);
			})}
		</Tabs>
	);
	}
}

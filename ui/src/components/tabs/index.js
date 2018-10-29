import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React, { Component } from 'react';
import 'react-tabs/style/react-tabs.css';
import Brands from '../brands'
import Button from '../common/Button'

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
                <TabList>{this.props.arr.map((tabData, index) => {
				return (
					<Tab key={index} style={
						this.state.activeIndex === index ? ({ backgroundColor: '#1bbfe6' }
						) : ({ backgroundColor: '#c7d7da' })} disabled={index == 0 ? false : true}>{tabData}
					</Tab>
				);
			})}
		</TabList>
		{this.props.arr1.map((panelData, index) => {
			const Component = panelData == "Brands" ? Brands:Button;
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


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllMarkets } from '../middlewares/markets'
import marketsReducer from '../reducers/index'
import Select from '../components/common/Select'
import PropTypes from 'prop-types'

class Markets extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.getMarkets();
    }
    render() {
        return (
            <Select options={this.props.marketList} onChangeMarket={this.props.onChangeMarket}/>
        );
    }
}
const convertMarkets = (state) => {
    let markets = state.marketsReducer.marketList && state.marketsReducer.marketList.map((market) => {
        return {
            key: market.marketId,
            value: market.marketName
        }
    });
    return markets;
}
const mapStateToProps = (state) => {
    return {
        marketList: convertMarkets(state)
    }
}

const mapDispatchToProps = {
    getMarkets: getAllMarkets
}
Markets.propTypes = {
    marketList: PropTypes.arrayOf(
        PropTypes.shape({
            marketId: PropTypes.number,
            marketName: PropTypes.string
        })
    )
};
export default connect(mapStateToProps, mapDispatchToProps)(Markets);
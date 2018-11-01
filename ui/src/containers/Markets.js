import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllMarkets } from '../middlewares/markets'
import marketsReducer from '../reducers/index'
import Select from '../components/common/Select'

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
 const marketVal = (state.authenticateUser && state.authenticateUser.authenticationSuccess) ? state.authenticateUser.authenticationSuccess.marketId : ''
    return {
        options: convertMarkets(state),
        marketVal: marketVal
    }
}
const mapDispatchToProps = {
    fetchData: getAllMarkets
}
export default connect(mapStateToProps, mapDispatchToProps)(Select);
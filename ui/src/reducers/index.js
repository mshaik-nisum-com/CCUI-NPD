import { combineReducers } from 'redux'
import { authenticateUser, bindLoginInputs, validation } from './authenticateUserReducer'
import marketsReducer from '../reducers/marketsReducer'
import brandsReducer from '../reducers/brandsReducer'
import orderNumberReducer from '../reducers/orderReducer'

const ccuiApp = combineReducers({
    authenticateUser,
    marketsReducer,
    brandsReducer,
    orderNumberReducer
})

export default ccuiApp

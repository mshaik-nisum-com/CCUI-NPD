import { combineReducers } from 'redux'
import {authenticateUser,bindLoginInputs,validation} from './authenticateUserReducer'
import marketsReducer from '../reducers/marketsReducer'

const ccuiApp = combineReducers({
    authenticateUser,
    marketsReducer
})

export default ccuiApp

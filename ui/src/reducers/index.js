import { combineReducers } from 'redux'
import { authenticateUser, bindLoginInputs, validation } from './authenticateUserReducer'
import marketsReducer from '../reducers/marketsReducer'
import brandsReducer from '../reducers/brandsReducer'

const ccuiApp = combineReducers({
    authenticateUser,
    marketsReducer,
    brandsReducer
})

export default ccuiApp

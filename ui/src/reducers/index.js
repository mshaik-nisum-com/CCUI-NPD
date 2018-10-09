import { combineReducers } from 'redux'
import {authenticateUser,bindLoginInputs,validation} from './authenticateUserReducer'

const ccuiApp = combineReducers({
    authenticateUser,
    bindLoginInputs,
    validation
})

export default ccuiApp

import { combineReducers } from 'redux'
import {authenticateUser,bindLoginInputs} from './authenticateUserReducer'

const ccuiApp = combineReducers({
    authenticateUser,
    bindLoginInputs
})

export default ccuiApp

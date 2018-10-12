import axios from 'axios';
import Constants from '../components/common/Constants'

export const getAllMarkets = () => {
  return function (dispatch) {
    const req = axios.get('http://localhost:3000/markets/marketList');
    req.then((response) => {
      dispatch({
        type: Constants.MARKETS_RECIEVED,
        payload: response
      })
    }).catch((error) => {
      dispatch({
        type: Constants.ERROR_MARKETS,
        error: error
      })
    })
  }
}

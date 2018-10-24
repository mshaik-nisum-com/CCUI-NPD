import axios from 'axios';
import {Constants} from '../components/common/Constants'

export const getAllMarkets = () => {
  return function (dispatch) {
    const req = axios.get(`${process.env.REACT_APP_SERVICE_API_URL}${Constants.FETCH_MARKETS_URL}`);
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

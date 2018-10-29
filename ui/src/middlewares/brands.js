import axios from 'axios';
import { Constants } from '../components/common/Constants'


export const getBrandsFromCountryId = () => {
	return function (dispatch) {
		const AUTH_TOKEN = localStorage.getItem('token');
		const req = axios.get(`${process.env.REACT_APP_SERVICE_API_URL}${Constants.FETCH_BRANDS_URL}`, {
			headers: { Authorization: "Bearer " + AUTH_TOKEN }
		});
		req.then((response) => {
			dispatch({
				type: 'BRANDS_RESPONSE',
				payload: response.data.data
			})
		}).catch((error) => {
			// dispatch({
			//   type: Constants.ERROR_MARKETS,
			//   error: error
			// })
		})
	}
}
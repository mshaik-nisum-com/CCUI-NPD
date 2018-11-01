import axios from 'axios';
import { Constants } from '../components/common/Constants'
import { brandsResponse, brandsErrorResponse } from '../actions/brandAction';

export const getBrandsFromCountryId = (id) => {
	return function (dispatch) {
		const AUTH_TOKEN = localStorage.getItem('token');
		const req = axios.get(`${process.env.REACT_APP_SERVICE_API_URL}${Constants.FETCH_BRANDS_URL}${id}`, {
			headers: { Authorization: "Bearer " + AUTH_TOKEN }
		});
		req.then((response) => {
			dispatch(brandsResponse(response))
		}).catch((error) => {
			dispatch(brandsErrorResponse(error))
		})
	}
}
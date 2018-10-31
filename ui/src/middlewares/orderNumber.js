import axios from 'axios';
import { Constants } from '../components/common/Constants'
import { orderNumberResponse, orderNumberError } from '../actions/orderAction';
export const getOrderNumber = (brand) => {
	return function (dispatch) {
		const AUTH_TOKEN = localStorage.getItem('token');
		const MARKET_ID = localStorage.getItem('marketId');
		const req = axios.get(`${process.env.REACT_APP_SERVICE_API_URL}${Constants.FETCH_ORDER_NUMBER_URL}/${MARKET_ID}/${brand.brandCode}`, {
			headers: { Authorization: "Bearer " + AUTH_TOKEN }
		});
		req.then((response) => {
			localStorage.setItem('brandName',response.data.brandName);
			dispatch(orderNumberResponse(response))
		}).catch((error) => {
			dispatch(orderNumberError(error))
		})
	}
}
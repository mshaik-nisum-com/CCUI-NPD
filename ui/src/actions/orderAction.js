import { Constants } from '../components/common/Constants';

export const orderNumberResponse = (response)=>({ 
    type: Constants.ORDER_NUMBER_RESPONSE,
    payload : response.data
});

export const orderNumberError = (error) => ({
    type: Constants.ERROR_ORDER_NUMBER,
    error: error
});
import { Constants } from '../components/common/Constants';

const orderNumberReducer = (state = {}, action) => {
    switch (action.type) {
        case Constants.ORDER_NUMBER_RESPONSE :{
            return {
                ...state,
                orderNumber : action.payload.orderId,
                brandName : action.payload.brandName,
                createdDate : action.payload.createdDate,
                marketId : action.payload.marketId
            }
        }
        case Constants.ERROR_ORDER_NUMBER:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
};
export default orderNumberReducer;
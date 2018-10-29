import { Constants } from '../components/common/Constants';

const brandsReducer = (state = {}, action) => {
    switch (action.type) {
        case Constants.BRANDS_RESPONSE:
            return {
                ...state,
                brandsList: action.payload
            }
        case Constants.ERROR_BRANDS:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
};
export default brandsReducer;
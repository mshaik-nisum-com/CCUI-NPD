import { Constants } from '../components/common/Constants';

export const brandsResponse = (response) => ({
    type: Constants.BRANDS_RESPONSE,
    payload: response.data.data
});

export const brandsErrorResponse = (error) => ({
    type: Constants.ERROR_BRANDS,
    error: error
});
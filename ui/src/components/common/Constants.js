// add all the constants here only

export const Constants = {
    type: 'error',
    errorMsg: 'Error message here',
    time: 5000,
    enable: true,
    MARKETS_RECIEVED: 'MARKETS_RECIEVED',
    ERROR_MARKETS: 'ERROR_MARKETS',
    BRANDS_RESPONSE: 'BRANDS_RESPONSE',
    ERROR_BRANDS: 'ERROR_BRANDS',
    ERROR_ORDER_NUMBER : 'ERROR_ORDER_NUMBER',
    ORDER_NUMBER_RESPONSE : 'ORDER_NUMBER_RESPONSE',
    FETCH_MARKETS_URL: '/markets/marketList',
    FETCH_BRANDS_URL: '/markets/fetchBrands/',
    FETCH_ORDER_NUMBER_URL : '/generateOrderNum',
}
export const ApiEndpoints = {
    LOGIN_URI: '/auth/login',
    FETCH_MARKETS_URI: '/markets/marketList'
}
export const LoginResponse = {
    ON_LOGIN_SUCCESS: 'AUTHENTICATE_USER',
    ON_LOGIN_FAIL: 'BAD_CREDENTIALS'
}
export const LoginValidationMessages = {
    ON_EMPTY_USERNAME: 'Username should not be empty',
    ON_EMPTY_PASSWORD: 'Password should not be empty',
    ON_EMPTY_MARKET: 'Market should not be empty'
}

export const LoginPageLables = {
    USERNAME: 'Username',
    PASSWORD: 'Password',
    MARKET: 'Select-Market'
}
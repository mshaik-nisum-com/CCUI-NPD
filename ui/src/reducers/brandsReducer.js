const brandsReducer = (state = {}, action) => {
    console.log("action", action);
    switch (action.type) {
        case 'BRANDS_RESPONSE':
            return {
                ...state,
                brandsList: action.payload
            }
        case 'ERROR_BRANDS':
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
};
export default brandsReducer;
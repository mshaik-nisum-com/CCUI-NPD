import Constants from '../components/common/Constants'
const marketsReducer = (state = {}, action) => {
  switch (action.type) {
    case Constants.MARKETS_RECIEVED:
      return {
        ...state,
        marketList: action.payload.data
      }
    case Constants.ERROR_MARKETS:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
};
export default marketsReducer;
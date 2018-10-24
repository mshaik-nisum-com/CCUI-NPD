export const authenticateUser = (state=[], action) => {
    switch (action.type) {
      case 'AUTHENTICATE_USER':
        return {
            ...state,
            isUserAuthenticated: true,
            authenticationSuccess: action.authenticationSuccess
        }
        case 'BAD_CREDENTIALS':
        return {
            ...state,
            isUserAuthenticated: false,
            errMsg: action.errMsg
        }
        default:
        return {
            ...state
        }
    }
    
}
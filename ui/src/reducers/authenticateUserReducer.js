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
            msg: action.authenticationFail
        }
        default:
        return {
            ...state
        }
    }
    
}

export const bindLoginInputs = (state=[], action) => {
    switch (action.type) {
      case 'BIND_USERNAME':
        return {
            ...state,
            email: action.text
        }
        case 'BIND_PASSWORD':
        return {
            ...state,
            password: action.text
        }
        case 'BIND_MARKET':
        return {
            ...state,
            market: action.text
        }
        default:
        return {
            ...state
        }
    }
    
}

export const validation = (state=[], action) => {
    switch (action.type) {
      case 'VALIDATION_MSG':
        return {
            ...state,
            msg: action.text
        }
        default:
        return {
            ...state
        }
    }
    
}

//export default authenticateUser;
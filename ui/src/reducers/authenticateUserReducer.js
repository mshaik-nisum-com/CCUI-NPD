export const authenticateUser = (state=[], action) => {
    switch (action.type) {
      case 'AUTHENTICATE_USER':
        return {
            ...state,
            status: true,
            authenticationSuccess: action.authenticationSuccess
        }
        case 'BAD_CREDENTIALS':
        return {
            ...state,
            status: false,
            authenticationFail: action.authenticationFail
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
            username: action.text
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

//export default authenticateUser;
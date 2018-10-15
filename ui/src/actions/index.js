
  export const landingPage = (text) => ({
    type: 'AUTHENTICATE_USER',
    authenticationSuccess:text
  })
  export const bindUsername = (text) => ({
    type: 'BIND_USERNAME',
    text
  })
  export const bindPassword = (text) => ({
    type: 'BIND_PASSWORD',
    text
  })
  export const bindMarket = (text) => ({
    type: 'BIND_MARKET',
    text
  })
  export const validation = (text) => ({
    type: 'VALIDATION_MSG',
    text
  })
  export const eraseMsg = (text) => ({
    type: 'BAD_CREDENTIALS',
    authenticationFail:text
  })


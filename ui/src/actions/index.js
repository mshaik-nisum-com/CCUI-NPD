import { authenticateUserCredintails } from '../middlewares';
import axios from 'axios';

//const credentials = null
//export const authenticateUser = authenticateUserCredintails(usercredentials)


export const authenticateUser = usercredentials=> {

  //const base64 = require('base-64');
    return function (dispatch){
      
      var config = { 
        headers: {'Authorization' : 'Basic '
    }
  }
      const request = axios.post("http://localhost:9100/Authentication/login",usercredentials);
    //   dispatch({
    //     type:"POST_ONE_REQUEST"
    //   })
      request.then((response)=>{
        dispatch({
          type: 'AUTHENTICATE_USER',
          authenticationSuccess:response
        });
        console.log(JSON.stringify(response));
      }).catch(error => {
        if(error.status===401){
          console.log(error);
          dispatch({
            type: 'BAD_CREDENTIALS',
            authenticationFail: error.data.message
          });
        }
    });
    }
  }

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


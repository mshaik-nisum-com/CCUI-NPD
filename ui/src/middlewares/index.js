import axios from 'axios';


export const authenticateUserCredintails = (usercredentials)=> {

      return function (dispatch){
    
        const request = axios.post("http://localhost:9100/Authentication/login",usercredentials);
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
import axios from 'axios';


export const authenticateUserCredintails = (usercredentials)=> {


 //var userData = JSON.stringify(usercredentials);
      return function (dispatch){
    
        const request = axios.post("http://localhost:4000/auth/login",usercredentials);
        request.then((response)=>{
          dispatch({
            type: 'AUTHENTICATE_USER',
            authenticationSuccess:response.data
          });
        }).catch(error => {
          if(error.status===401){
            console.log(error);
            dispatch({
              type: 'BAD_CREDENTIALS',
              authenticationFail: error.data.errMsg
            });
          }
      });
      }
    }
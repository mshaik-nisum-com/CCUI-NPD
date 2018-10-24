import axios from 'axios';
import {ApiEndpoints, LoginResponse} from '../components/common/Constants'
import history from '../utils/history'

export const authenticateUserCredintails = (usercredentials,history)=> {
      return function (dispatch){
    debugger
        const request = axios.post(`${process.env.REACT_APP_SERVICE_API_URL}${ApiEndpoints.LOGIN_URI}`,usercredentials);
        request.then((response)=>{
          dispatch({
            type: LoginResponse.ON_LOGIN_SUCCESS,
            authenticationSuccess:response.data
          });
          localStorage.token = response.data.token
          localStorage.name = response.data.name
          history.push("/home");
        }).catch(error => {
          if(error.status===400){
            console.log(error);
            dispatch({
              type: LoginResponse.ON_LOGIN_FAIL,
              errMsg: error.data.errMsg
            });
            history.push("/");
          }
      });
      }
    }
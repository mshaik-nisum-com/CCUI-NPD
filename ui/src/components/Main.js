import React from 'react';
import { connect } from 'react-redux'
import Home from '../components/home/Home';
import Login from '../components/login/Login';

const Main=(props)=> {
       if(props.isUserAuthenticated || localStorage.length>0){
          return <Home userInfo={props.authenticationSuccess}/>
         } else {
          return <Login validationMsg={props.validationMsg} loginInputs={props.loginInputs} history={props.history}/>
         //return (props.history.push('/'))
        }
}

export default Main
import React, { Component } from 'react';
import { connect } from 'react-redux'
import Home from '../components/home/Home';
import Login from '../components/login/Login';

class Main extends Component {
    state = {  }

    constructor(props) {
        super(props)
        var tok= localStorage.length;
        console.log(tok);
    }
   

    render() { 
        if(this.props.isUserAuthenticated || localStorage.length>0){
          return <Home userInfo={this.props.authenticationSuccess}/>
        } else {
          return <Login authErrorMsg={this.props.authenticationFail} validationMsg={this.props.validationMsg} loginInputs={this.props.loginInputs}/>
        }
    }
}

const mapStateToProps = (state) => {
    console.log(state.authenticateUser.isUserAuthenticated,"required");
    return {
        isUserAuthenticated: state.authenticateUser.isUserAuthenticated,
        validationMsg: state.validation.msg || state.authenticateUser.msg,
        authenticationSuccess:state.authenticateUser.authenticationSuccess,
        loginInputs: state.bindLoginInputs
    }
  }

  Main = connect(mapStateToProps)(Main)

export default Main
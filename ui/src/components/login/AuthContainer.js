import React, { Component } from 'react';
import { connect } from 'react-redux'
import Homepage from '../home/home';
import '../../css/login.css'
import LoginComponent from '../LoginComponent';

class AuthContainer extends Component {
    state = {  }

    constructor(props) {
        super(props)
    }

    render() { 
        if(this.props.status){
          return <Homepage userInfo={this.props.authenticationSuccess}/>
        } else {
          return <LoginComponent loginInputs={this.props.loginInputs}/>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.authenticateUser.status,
        validationMsg: state.validation.msg,
        authenticationSuccess:state.authenticateUser.authenticationSuccess,
        authenticationFail: state.authenticateUser.authenticationFail,
        loginInputs: state.bindLoginInputs
    }
  }

AuthContainer = connect(mapStateToProps)(AuthContainer)

export default AuthContainer
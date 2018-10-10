import React, { Component } from 'react';
import { connect } from 'react-redux'
import Homepage from '../components/home/home';
import '../../css/login.css'
import LoginComponent from '../components/login/LoginComponent';

class MainContainer extends Component {
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

  MainContainer = connect(mapStateToProps)(MainContainer)

export default MainContainer
import React, { Component } from 'react';
import { connect } from 'react-redux'
import Home from '../components/home/Home';
import Login from '../components/login/Login';

class Main extends Component {
    state = {  }

    constructor(props) {
        super(props)
    }

    render() { 
        if(this.props.status){
          return <Home userInfo={this.props.authenticationSuccess}/>
        } else {
          return <Login validationMsg={this.props.validationMsg} loginInputs={this.props.loginInputs}/>
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

  Main = connect(mapStateToProps)(Main)

export default Main
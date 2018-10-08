import React, { Component } from 'react';
import { connect } from 'react-redux'
import Countrieslist from '../common/Countrieslist';
import Inputfield from '../common/Inputfield';
import Button from '../common/Button';
import Homepage from '../home/home';
import { authenticateUser,bindUsername,bindPassword,bindMarket } from '../../actions'


import '../../css/login.css'

class Login extends Component {
    state = {  }

    constructor(props) {
        debugger
        super(props)
    }

    validate(usercredentials){

        if(usercredentials.username==="" && usercredentials.username===null){
            return false;
        }else if(usercredentials.password==="" && usercredentials.password===null){
            return true;
        }
    }

    authenticate(e){
        e.preventDefault();

    var usercredentials= this.props.loginInputs;
    //if(this.validate(usercredentials)){
      this.props.dispatch(authenticateUser(usercredentials));
    //}
    }
    bindUsername(evt){
        this.props.dispatch(bindUsername(evt.target.value));
    }
    bindPassword(evt){
        this.props.dispatch(bindPassword(evt.target.value));
    }
    bindMarket(evt){
       this.props.dispatch(bindMarket(evt.target.value));
    }


    render() { 
        if(this.props.status){
          return <Homepage/>
        } else {
            return ( 
                <div className="login">
                
                {/* <div className="alert alert-danger alert-dismissable">
                    <strong>{this.props.authenticationFail}</strong>
                </div> */}
                {this.props.authenticationFail ? <div className='alert alert-danger'>
                    {this.props.authenticationFail}
                    <div className="close-icn">x</div>
                </div> : ''}
                
                <h3 className="text-center">Login</h3>
                <form >  
                    <div className="form-group">
                        <Inputfield inputType="text" inputStyle="" onChangeFunction={this.bindUsername.bind(this)} labelText="Username" elId="username" />
                    </div>
                    <div className="form-group">
                        <Inputfield inputType="password" inputStyle="" labelText="Password" onChangeFunction={this.bindPassword.bind(this)} elId="password"  />
                    </div>
                    <div className="form-group">
                        <Countrieslist labelText="Select Country" inputStyle="" onChangeMarket={this.bindMarket.bind(this)} elId="countries"  />
                    </div>
                    <Button btnStyle="btn-success btn-block" btnType="button" onClickFunction={this.authenticate.bind(this)} btnText="Submit" />
                </form>
                <div className="text-center small">Copyrights &copy; 2018. Nisum Technologies Inc. All rights reserved.</div>
            </div>
        )};
    }
}

const mapStateToProps = (state) => {
    debugger
    return{
        status: state.authenticateUser.status,
        authenticationFail: state.authenticateUser.authenticationFail,
        loginInputs: state.bindLoginInputs
    }
  }

 Login = connect(mapStateToProps)(Login)

export default Login
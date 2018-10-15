import React, { Component } from 'react'
import { connect } from 'react-redux'
import Markets from '../../containers/Markets'
import InputField from '../common/Inputfield'
import Button from '../common/Button'
import Constants from '../common/Constants'
import Notification from '../common/Notification'
import { eraseMsg,bindUsername,bindPassword,bindMarket,validation } from '../../actions'
import {authenticateUserCredintails} from '../../middlewares/authenticateUser'
import '../../css/login.css'

class Login extends Component {
    constructor(props){
        super (props);
        this.message = {};
    }

    validate(usercredentials){
        if (usercredentials.email === "" || !usercredentials.email) {
            this.message.validationMsg = 'Username should not be empty';
             this.props.dispatch(validation('Username should not be empty'));
            //this.props(validation('Username should not be empty'));

            return false;
        } else if (usercredentials.password === "" || !usercredentials.password) {
            this.props.dispatch(validation('Password should not be empty'));
            return false;
        } else if (usercredentials.market === "" || !usercredentials.market) {
            this.props.dispatch(validation('Market should not be empty'));
            return false;
        } else {
            return true;
        }
    }

    authenticate(e){
        e.preventDefault();
        const usercredentials= this.props.loginInputs;
        if (this.validate(usercredentials)) {
            this.props.dispatch(authenticateUserCredintails(usercredentials));
        }
    }
    
    bindUsername(evt){
        this.props.dispatch(validation(''));
        this.props.dispatch(eraseMsg(''));
        this.props.dispatch(bindUsername(evt.target.value));
    }
    
    bindPassword(evt){
        this.props.dispatch(validation(''));
        this.props.dispatch(eraseMsg(''));
        this.props.dispatch(bindPassword(evt.target.value));
    }
    
    bindMarket(evt){
        this.props.dispatch(validation(''));
         this.props.dispatch(eraseMsg(''));
       this.props.dispatch(bindMarket(evt.target.value));
    }

    render() {
        return (
            <div className="login">

                {this.props.validationMsg ? <Notification type={Constants.type} enableCloseIcon={Constants.enable} message={this.props.validationMsg} /> : ''}
                {/* {this.props.authErrorMsg ? <Notification type={Constants.type} enableCloseIcon={Constants.enable} autoCloseTime={Constants.time} message={this.props.authErrorMsg} /> : ''} */}
                
                <h3 className="text-center">Login</h3>
                <form >  
                    <div className="form-group">
                        <InputField inputType="text" inputStyle="" onChangeFunction={this.bindUsername.bind(this)} labelText="Username" elId="username" />
                    </div>
                    <div className="form-group">
                        <InputField inputType="password" inputStyle="" labelText="Password" onChangeFunction={this.bindPassword.bind(this)} elId="password"  />
                    </div>
                    <div className="form-group">
                        <Markets labelText="Select Country" inputStyle="" onChangeMarket={this.bindMarket.bind(this)} elId="countries"  />
                    </div>
                    <Button btnStyle="btn-success btn-block" btnType="button" onClickFunction={this.authenticate.bind(this)} btnText="Submit" />
                </form>
                <div className="text-center small">Copyrights &copy; 2018. Nisum Technologies Inc. All rights reserved.</div>
            </div>
        )
    }
}

Login = connect()(Login)

export default Login
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Markets from '../../containers/Markets'
import InputField from '../common/Inputfield'
import Button from '../common/Button'
import {Constants} from '../common/Constants'
import Notification from '../common/Notification'
import {bindUsername,bindPassword,bindMarket,validation } from '../../actions'
import {authenticateUserCredintails} from '../../middlewares/authenticateUser'
import {LoginValidationMessages,LoginPageLables} from '../common/Constants'

import '../../css/login.css'

class Login extends Component {
constructor(props){
    super(props)
   this.state = {
            email: "",
            password: "",
            marketId: "",

        errorMsg:{
            validationMsg:"",
            errorResponse: ''
        }
    };
}
    validate(usercredentials){
        if (usercredentials.email === "" || !usercredentials.email) {
            this.setState({
                errorMsg: {
                    validationMsg: LoginValidationMessages.ON_EMPTY_USERNAME
                }
            })
            return false;
        } else if (usercredentials.password === "" || !usercredentials.password) {
            this.setState({
                errorMsg: {
                    validationMsg: LoginValidationMessages.ON_EMPTY_PASSWORD
                }
            })
            return false;
        } else if (usercredentials.marketId === "" || !usercredentials.marketId) {
            this.setState({
                errorMsg: {
                    validationMsg: LoginValidationMessages.ON_EMPTY_MARKET
                }
            })
            return false;
        } else {
            return true;
        }
    }

    authenticate(e){
        e.preventDefault();
        var usercredentials= this.state;
        delete usercredentials.errorMsg;
        if (this.validate(usercredentials)) {
            this.props.dispatch(authenticateUserCredintails(usercredentials,this.props.history));
            this.setState({
                errorMsg:{validationMsg
                : "",errorResponse: this.props.validationMsg || ""},

              })
        }

    }

    bindUsername(evt){
      this.setState({
            email: evt.target.value,
        errorMsg:{validationMsg
            : ""}
      })

    }

    bindPassword(evt){
       this.setState({
            password: evt.target.value
        ,errorMsg:{validationMsg
            : ""},
      })

    }

    bindMarket(evt){
       this.setState({
            marketId: evt.target.value
        ,errorMsg:{validationMsg
            : ""}
      })

    }

    render() {

        return (
            <div className="login">

                {this.state.errorMsg.errorResponse || this.state.errorMsg.validationMsg ? <Notification type={Constants.type} enableCloseIcon={Constants.enable} message={this.state.errorMsg.errorResponse || this.state.errorMsg.validationMsg } /> : ''}

                <h3 className="text-center">Login</h3>
                <form >
                    <div className="form-group">
                        <InputField inputType="text" inputStyle="" onChangeHandler={this.bindUsername.bind(this)} labelText={LoginPageLables.USERNAME} elId="username" />
                    </div>
                    <div className="form-group">
                        <InputField inputType="password" inputStyle="" labelText={LoginPageLables.PASSWORD} onChangeHandler={this.bindPassword.bind(this)} elId="password"  />
                    </div>
                    <div className="form-group">
                        <Markets labelText={LoginPageLables.MARKET} inputStyle="" onChangeHandler={this.bindMarket.bind(this)} elId="countries"  />
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
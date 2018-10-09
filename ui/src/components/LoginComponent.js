import React, { Component } from 'react'
import { connect } from 'react-redux'
import Countrieslist from './common/Countrieslist'
import Inputfield from './common/Inputfield'
import Button from './common/Button'
import { landingPage,bindUsername,bindPassword,bindMarket,validation } from '../actions'

class LoginComponent extends Component {

    validate(usercredentials){
        if (usercredentials.username === "" || !usercredentials.username) {
            this.props.dispatch(validation('username should not be empty'));
            return false;
        } else if (usercredentials.password === "" || !usercredentials.password) {
            this.props.dispatch(validation('password should not be empty'));
            return false;
        } else if (usercredentials.market === "" || !usercredentials.market) {
            this.props.dispatch(validation('market should not be empty'));
            return false;
        } else {
            return true;
        }
    }

    authenticate(e){
        e.preventDefault();
        const usercredentials= this.props.loginInputs;
        if (this.validate(usercredentials)) {
            this.props.dispatch(landingPage(usercredentials));
        }
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
        return (
            <div className="login">
                {this.props.validationMsg ? <div className='alert alert-danger'>
                    {this.props.validationMsg}
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
        )
    }
}

LoginComponent = connect()(LoginComponent)

export default LoginComponent
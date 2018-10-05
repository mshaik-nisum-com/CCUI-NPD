import React, { Component } from 'react';
import Countrieslist from '../common/Countrieslist';
import Inputfield from '../common/Inputfield';
import Button from '../common/Button';

import '../../css/login.css'

class Login extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="login">
                <h3 className="text-center">Login</h3>
                <form>  
                    <div class="form-group">
                        <Inputfield inputType="text" inputStyle="" labelText="Username" elId="username" />
                    </div>
                    <div class="form-group">
                        <Inputfield inputType="password" inputStyle="" labelText="Password" elId="password"  />
                    </div>
                    <div class="form-group">
                        <Countrieslist labelText="Select Country" inputStyle="" elId="countries"  />
                    </div>
                    <Button btnStyle="btn-success btn-block" btnType="submit" btnText="Submit" />
                </form>
                <div className="text-center small">Copyrights &copy; 2018. Nisum Technologies Inc. All rights reserved.</div>
            </div>
         );
    }
}
 
export default Login;
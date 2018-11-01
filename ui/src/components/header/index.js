import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import history from '../../utils/history'
import Markets from '../../containers/Markets'
import {LoginPageLables} from '../common/Constants'
import {getBrandsFromCountryId} from '../../middlewares/brands'

class Header extends Component {
    state = {}
    logout() {
        localStorage.clear();
        //return  <Redirect to='/'/>
        //history.push('/')
        window.location.reload();

    }
    bindMarket(evt){
        this.setState({
             marketId: evt.target.value
         ,errorMsg:{validationMsg
             : ""}
       })
       this.props.dispatch(getBrandsFromCountryId(evt.target.value))

     }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
                    <a className="navbar-brand mr-1">Call Center App</a>
                    {/* <button class="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
                    <i class="fas fa-bars"></i>
                </button> */}
                    <div className="ml-auto top-right-nav">
                        <ul className="navbar-nav">
                            <li>
                                {/* <select className="form-control">
                                    <option>United States</option>
                                </select>*/}
                                 <div className="form-group">
                        <Markets labelText={LoginPageLables.MARKET} inputStyle="" onChangeHandler={this.bindMarket.bind(this)} elId="countries"  />
                            </div>
                            </li>
                            <li>
                                <a href="/">Notepad</a>
                            </li>
                            <li>
                                <a href="/">SVC Lookup</a>
                            </li>
                            <li>
                                <a href="/">Promo Lookup</a>
                            </li>
                            <li>
                                <a href="/">Alerts</a>
                            </li>
                            <li>
                                <a href="/">Courtesies</a>
                            </li>
                            <li>
                                <a href="/">Notes</a>
                            </li>
                            <li className="nav-item dropdown no-arrow">
                                <a href="/" className="nav-link dropdown-toggle" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-user-circle fa-fw"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                                    <a href="/" className="dropdown-item" data-toggle="modal" data-target="#logoutModal"><b>{this.props.userInfo || ""}</b></a>
                                    <a href="/" onClick={this.logout.bind(this)} className="dropdown-item" data-toggle="modal" data-target="#logoutModal">Logout</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
export default connect()(Header);
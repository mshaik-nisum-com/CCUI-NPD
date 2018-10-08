import React, { Component } from 'react';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <nav class="navbar navbar-expand navbar-dark bg-dark static-top">
                <a class="navbar-brand mr-1" href="index.html">CCUI 2.0</a>
                {/* <button class="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
                    <i class="fas fa-bars"></i>
                </button> */}
                <div className="ml-auto top-right-nav">
                    <ul class="navbar-nav">
                        <li>
                            <select className="form-control">
                                <option>United States</option>
                            </select>
                        </li>
                        <li>
                            <a href="#">Notepad</a>
                        </li>
                        <li>
                            <a href="#">SVC Lookup</a>
                        </li>
                        <li>
                            <a href="#">Promo Lookup</a>
                        </li>
                        <li>
                            <a href="#">Alerts</a>
                        </li>
                        <li>
                            <a href="#">Courtesies</a>
                        </li>
                        <li>
                            <a href="#">Notes</a>
                        </li>
                        <li class="nav-item dropdown no-arrow">
                            <a class="nav-link dropdown-toggle"  id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-user-circle fa-fw"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                                <a class="dropdown-item" data-toggle="modal" data-target="#logoutModal"><b>Agent: CCUI23_US</b></a>
                                <a class="dropdown-item" data-toggle="modal" data-target="#logoutModal">Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
         );
    }
}
 
export default Header;
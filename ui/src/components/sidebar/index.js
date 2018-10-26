import React, { Component } from 'react';

class Sidebar extends Component {
    state = {}
    render() {
        return (
            <div>
                <ul className="sidebar navbar-nav">
                    <li className="nav-item dropdown">
                        <a href="/" className="nav-link dropdown-toggle" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {/* <i class="fas fa-fw fa-folder"></i> */}
                            <span>Find Style</span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                            <div className="form-group">
                                <label>Product ID</label>
                                <input className="form-control" placeholder="Enter ID" />
                            </div>
                            <div className="form-group">
                                <label>Brand</label>
                                <select className="form-control">
                                    <option>Select Brand </option>
                                    <option>Gap </option>
                                    <option>Old Navy</option>
                                </select>
                            </div>

                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            {/* <i class="fas fa-fw fa-chart-area"></i> */}
                            <span>Custom Search</span></a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;
import React, { Component } from 'react';
import '../../css/sidebar.css';
class SideNav extends Component {
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
                            <div className="col-sm-12">
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
                                <a href="#" role="button" className="btn btn-primary btn-sm">Find</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/">
                            {/* <i class="fas fa-fw fa-chart-area"></i> */}
                            <span>Custom Search</span></a>
                        <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="email">Email Id:</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter Email" />
                                </div>
                                <a href="#" role="button" className="btn btn-primary btn-sm">Search</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle disabled not-allowed" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/">
                            <span>Order Details</span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                            <div className="form-group">
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle disabled" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/">
                            <span>Final Review</span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                            <div className="form-group">
                            </div>
                        </div>
                    </li>
                    <div className="card promoCard">
                        <div className="card-body">
                            <h6 className="card-title">Promo Messages</h6>
                            <p className="card-text promoInfo">Some quick example text to build on the card and display promoMessages.
                            Some quick example text to build on the card and display promoMessages.
                            Some quick example text to build on the card and display promoMessages.
                            Some quick example text to build on the card and display promoMessages.
                            Some quick example text to build on the card and display promoMessages.
                            Some quick example text to build on the card and display promoMessages.</p>
                        </div>
                    </div>
                    <li className="summaryInfo">
                        <span>Summary Of Charges</span>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Merchandise</td>
                                    <td>$000</td>
                                </tr>
                                <tr>
                                    <td>Shipping</td>
                                    <td>$000</td>
                                </tr>
                                <tr>
                                    <td>Taxes</td>
                                    <td>$000</td>
                                </tr>
                                <tr>
                                    <td>GrandTotal</td>
                                    <td>$000</td>
                                </tr>
                            </tbody>
                        </table>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SideNav;
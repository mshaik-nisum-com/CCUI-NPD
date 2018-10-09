import React, { Component } from 'react'

export default class BrandNav extends Component {
  render() {
    return (
      <div>
            <nav className="navbar navbar-expand navbar-dark  static-top navHeader">
               <img src="../../images/homeIcon"/> 
               <div className="order-details" ><b>Brand</b>  : GOL</div>
               <div className="order-details" ><b>orderNumber</b>  : YH845DFH</div>
               <div className="order-details" ><b>orderDate</b>  : 10/12/2018</div>
            </nav>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class BrandNav extends Component {
  render() {
    return (
      <div>
            <nav className="navbar navbar-expand navbar-dark  static-top navHeader">
               <img className="home-Icon" src="https://png.icons8.com/metro/50/000000/home.png"/>
               <div className="order-details" ><b>Brand</b>:  {this.props.orderDetails.brandName}</div>
               <div className="order-details" ><b>orderNumber</b>: {this.props.orderDetails.orderNumber}</div>
               <div className="order-details" ><b>orderDate</b>  : {this.props.orderDetails.createdDate}</div>
            </nav>
      </div>
    )
  }
}

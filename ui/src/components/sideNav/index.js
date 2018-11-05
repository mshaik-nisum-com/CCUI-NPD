import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../css/sideNav.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
//import 'react-accessible-accordion/dist/minimal-example.css';

class SideNav extends Component {
    state = {}
    render() {
        return (
            <div className="sidebar">
                <Accordion>
                    <AccordionItem expanded="true">
                        <AccordionItemTitle>
                            <span><b>Find Style</b></span>
                        </AccordionItemTitle>
                        <AccordionItemBody>
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
                        </AccordionItemBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemTitle>
                            <span><b>Customer Search</b></span>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <div className="form-group">
                                <label htmlFor="email">Email Id:</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter Email" />
                            </div>
                            <a href="#" role="button" className="btn btn-primary btn-sm">Search</a>
                        </AccordionItemBody>
                    </AccordionItem>
                    <AccordionItem className="disabled">
                        <AccordionItemTitle>
                            <span><b>Final Review</b></span>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <div>Final Review</div>
                        </AccordionItemBody>
                    </AccordionItem>
                    <AccordionItem className="disabled">
                        <AccordionItemTitle>
                            <span><b>Order Details</b></span>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <div>Order Details</div>
                        </AccordionItemBody>
                    </AccordionItem>
                </Accordion>
                <div className="accordionHeading"><b>Promo Messages</b></div>
                <div className="card promoCard">
                    <div className="card-body">
                        <p className="card-text promoInfo">Some quick example text to build on the card and display promoMessages.
                        Some quick example text to build on the card and display promoMessages.
                        Some quick example text to build on the card and display promoMessages.
                        Some quick example text to build on the card and display promoMessages.
                        Some quick example text to build on the card and display promoMessages.
                            Some quick example text to build on the card and display promoMessages.</p>
                    </div>
                </div>
                <div className="accordionHeading"><b>Summary Of Charges</b></div>
                <div className="chargesInfo">
                    <div className="row">
                        <div className="col-sm-7">
                            Merchandise
    </div>
                        <div className="col-sm-5">$5
    </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-7">Shipping
    </div>
                        <div className="col-sm-5">$45
    </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-7">Taxes
    </div>
                        <div className="col-sm-5">$123
    </div>
                    </div>
                    <div className="row totalPrice">
                        <div className="col-sm-7">Grand Total
    </div>
                        <div className="col-sm-5">$4567
    </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SideNav;
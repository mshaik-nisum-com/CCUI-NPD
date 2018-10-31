import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from '../header'
import Sidebar from '../sidebar'
import Main from '../main'
import BrandNav from '../brandNav'
import history from '../../utils/history'
import '../../css/home.css'

class Home extends Component {
    state = {}

    constructor(props) {
        super(props)
    }

    onBackButtonEvent(e) {
        e.preventDefault();
        window.history.forward()
    }

    componentWillMount() {
        window.onpopstate = this.onBackButtonEvent;
    }


    render() {
        if (this.props.isUserAuthenticated == false && localStorage.length == 0) {
            //history.push('/')
            return <Redirect to='/' />
        } else {
            return (
                <div>
                    <Header userInfo={localStorage.name ? localStorage.name : ''} />
                    {this.props.orderDetails.orderNumber ? <BrandNav orderDetails = {this.props.orderDetails ? this.props.orderDetails : ''} /> : '' }
                    <div id="wrapper">
                        <Sidebar />
                        <div id="content-wrapper">
                            <Main />
                        </div>
                    </div>
                </div>
            );
        }
    }
}


const mapStateToProps = (state) => {
    console.log("vachinda",state)
    return {
        isUserAuthenticated: state.authenticateUser.isUserAuthenticated || false,
        authenticationSuccess: state.authenticateUser.authenticationSuccess,
        orderDetails : state.orderNumberReducer
    }
}
export default connect(mapStateToProps)(Home)
//export default Home;
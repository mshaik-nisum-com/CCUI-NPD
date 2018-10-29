import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from '../header'
import Sidebar from '../sidebar'
import Main from '../main'
import history from '../../utils/history'

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
    return {
        isUserAuthenticated: state.authenticateUser.isUserAuthenticated || false,
        authenticationSuccess: state.authenticateUser.authenticationSuccess
    }
}
export default connect(mapStateToProps)(Home)
//export default Home;
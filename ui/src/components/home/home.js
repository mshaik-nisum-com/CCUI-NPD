import React, { Component } from 'react';
import Header from '../header/index'
import Sidebar from '../sidebar/index'
import Mainbody from '../mainbody/index'

class Homepage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <div id="wrapper">
                    <Sidebar />
                    <div id="content-wrapper">
                        <Mainbody />
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Homepage;
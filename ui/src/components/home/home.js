import React, { Component } from 'react';
import Header from '../Header/index'
import Sidebar from '../Sidebar/index'
import Mainbody from '../Mainbody/index'

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
import React, { Component } from 'react';
import Header from '../header'
import Sidebar from '../sidebar'
import Mainbody from '../mainbody'
import BrandNav from '../brandNav'
import '../../css/home.css'
class Homepage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <BrandNav/>
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
import React, { Component } from 'react';
import Header from '../header'
import Sidebar from '../sidebar'
import Mainbody from '../mainbody'

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header userInfo={this.props.userInfo}/>
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
 
export default Home;
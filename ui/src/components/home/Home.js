import React, { Component } from 'react';
import Header from '../header'
import Sidebar from '../sidebar'
import Mainbody from '../mainbody'

class Home extends Component {
    state = {  }
    constructor(props){
        debugger
        super(props)
        if(localStorage.length==0){
    localStorage.setItem("accesstoken",props.userInfo.token);
    localStorage.setItem("name",props.userInfo.name);

       }
    }
    render() { 
        return ( 
            <div>
                <Header userInfo={localStorage.getItem("name")}/>
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
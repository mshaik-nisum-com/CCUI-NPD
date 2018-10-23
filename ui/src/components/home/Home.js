import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Header from '../header'
import Sidebar from '../sidebar'
import Mainbody from '../mainbody'

class Home extends Component {
   // state = {  }

   constructor(props){
 
    super(props)
   }

componentWillMount = () => {
    //if(localStorage.length===0){
        //this.props.history.push('/')
    //}
}

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
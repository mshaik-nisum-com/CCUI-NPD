import React, { Component } from 'react';
import Footer from '../Footer/index'

class Mainbody extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div class="container-fluid">
                    <h1>Home Page</h1>

                    <Footer />
                </div>
            </div>
         );
    }
}
 
export default Mainbody;
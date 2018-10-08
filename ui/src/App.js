import React, { Component } from 'react';
import Login from './components/login/Login-auth';
import Homepage from './components/home';
import './css/common.css';
import '../src/css/bootstrap-cdn.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        {/* Enable the below component to view the home page
        <Homepage /> */}
      </div>
    );
  }
}

export default App;

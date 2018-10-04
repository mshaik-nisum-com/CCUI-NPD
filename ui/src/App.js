import React, { Component } from 'react';
import Login from './components/login/Login-auth';
import './css/common.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;

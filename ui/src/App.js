import React, { Component } from 'react';
import './css/common.css';
import '../src/css/bootstrap-cdn.css'
import AuthContainer from './components/login/AuthContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AuthContainer />
        {/* Enable the below component to view the home page
        <Homepage /> */}
      </div>
    );
  }
}

export default App;

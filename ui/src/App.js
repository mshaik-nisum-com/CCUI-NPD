import React, { Component } from 'react';
import './css/common.css';
import '../src/css/bootstrap-cdn.css'
import MainContainer from './containers/MainContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainContainer />
        {/* Enable the below component to view the home page
        <Homepage /> */}
      </div>
    );
  }
}

export default App;

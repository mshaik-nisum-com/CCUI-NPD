import React, { Component } from 'react';
import './css/common.css';
import '../src/css/bootstrap-cdn.css'
import Main from './containers/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;

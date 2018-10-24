import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import './css/common.css';
import '../src/css/bootstrap-cdn.css'
import LoginContainer from './containers/LoginContainer';
import Home from './components/home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">

<Switch>
      <Route exact path="/" component={LoginContainer}/>
      <Route path="/home" component={Home}/>
</Switch>
        {/* <Main /> */}
      </div>
    );
  }
}

export default App;

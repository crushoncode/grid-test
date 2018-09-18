import React, { Component } from 'react';
import './App.css';
import inglogo from './test1.png';
import google from './test2.png';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="box c">C</div>
        <div className="box d">
          <div className="box e">
            <div className="headTitle">Hey grid,</div>
            <dic className="subTitle">See you tmr</dic>
          </div>
          <div className="box f">
            <img src={inglogo} alt="logo" width="100" height="60" />
          </div>
          <div className="box g">
            <img src={google} alt="logo" width="100" height="60" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

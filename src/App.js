import React, { Component, Fragment } from 'react';
import './App.css';
import inglogo from './test1.png';
import google from './test2.png';
import business from './Business.jpg';

class App extends Component {
  render() {
    return (
      <Fragment>
        <img
          className="backgroundImage"
          src={business}
          alt="logo"
          width="100"
          height="60"
        />
        <div className="box d">
          <div className="box e">
            <div className="headTitle">Hey grid,</div>
            <dic className="subTitle">See you tmr</dic>
          </div>
          <div className="box f">
            <img
              className="indiLogo"
              src={inglogo}
              alt="logo"
              width="100"
              height="60"
            />
          </div>
          <div className="box g">
            <img
              className="indiLogo"
              src={google}
              alt="logo"
              width="100"
              height="60"
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="grid">
        <div className="title">Title</div>
        {/* <div className="header">Header</div> */}
        {/* <div className="sidebar">Sidebar</div> */}
        <div className="content">Content</div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}

export default App;

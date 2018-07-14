import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={this.hello1.bind(this)}/>
          <h1 className="App-title">Welcome to React {this.props.name} </h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }

  hello1(prop) {
    alert("hello1" + this +""+ prop);
  }
}

export default App;

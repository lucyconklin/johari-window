import React, { Component } from 'react';
import './App.css';
import SideBar from '../sidebar/SideBar';
import Header from '../header/Header';
import Main from '../main/Main';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <SideBar />
        <Main />
      </div>
    );
  }
}

export default App;

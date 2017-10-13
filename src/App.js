import React, { Component } from 'react';
import './App.css';

// Import Component
import Main from './components/Main'
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <Main />
        </div>
      </div>
    );
  }
}

export default App;

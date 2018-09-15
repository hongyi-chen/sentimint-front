import React, { Component } from 'react';
import logo from './logo.png';
import question from './question.png';
import TextForm from './TextForm';
import './App.css';
import './TextForm.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={question} className="Question-icon" alt="help" />
        </header>
        <TextForm />
      </div>
    );

  }
}

export default App;

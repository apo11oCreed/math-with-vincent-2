import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import MenuButtons from './buttons';

function App() {
  return (
    <div className="App">
    <Container>
    <h1>Math With Vincent 2</h1>
    <MenuButtons />
      <header className="App-header row">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </Container>
    </div>
  );
}

export default App;

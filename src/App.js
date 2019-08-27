import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import MenuButtons from './components/buttons';
import ChallengeWindow from './components/challengeWindow';
//let addButtonText="<span>add</span>";
//let subtractButtonText="<span>subtract</span>";

export default class App extends React.Component {
  render(){
    return (
    <div className="App">
    <Container>
      <h1>Math With Vincent 2</h1>
      <MenuButtons />
        <header className="App-header row">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <ChallengeWindow />
      </Container>
    </div>
  );
  }
}

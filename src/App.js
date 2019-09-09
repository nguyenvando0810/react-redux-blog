import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import HomeContainer from './container/home'
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Container>
          <HomeContainer />
        </Container>
      </div>
    )
  }
}

export default App;

import React from 'react';
import Row from 'react-bootstrap/Row'
import CarouselHome from './components/carousel/carousel'

class Home extends React.Component {
  render() {
    return (
      <div>
        <CarouselHome />
        <Row>
          {this.props.children}
        </Row>
      </div>
    )
  }
}

export default Home;

import React from 'react';
import Row from 'react-bootstrap/Row'
import CarouselHome from './components/carousel/carousel'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

class Home extends React.Component {
  render() {
    const {products, visibleItem } = this.props
    return (
      <div>
        <CarouselHome />
        <Container>
          <Row>
            {this.props.children}
          </Row>

          {products.length > 0 && products.length > visibleItem &&
            <div className="text-right">
              <Button variant="outline-primary" size="md" onClick={this.props.loadMore}>Load More</Button>
            </div>
          }
        </Container>
      </div>
    )
  }
}

export default Home;

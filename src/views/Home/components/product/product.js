import React from 'react';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import './product.scss'

class Product extends React.Component {
  render() {
    const { product } = this.props
    const status = product.status ? 'Sold In' : 'Sold Out'
    const statusClass = product.status ? 'success' : 'warning'

    return (
      <Col md={4} sm={6} className="mb-3">
        <Card  className="product">
          {/* <Card.Img variant="top" src="https://via.placeholder.com/100"/> */}
          <Card.Body >
            <Card.Title>Name: {product.name}</Card.Title>
            <Card.Title className="product__name">Price: {product.price}</Card.Title>
            <Card.Text className="product__description">{product.description}</Card.Text>
            <p className="product__status"><span className={`badge badge-${statusClass}`}>{status}</span></p>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default Product;

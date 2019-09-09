import React from 'react';
import { connect } from 'react-redux'
import { getProductsRequest } from './../actions/index'
import Home from './../views/Home/home'
import Product from './../views/Home/components/product/product'
import Button from 'react-bootstrap/Button'

class HomeContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visibleItem: 5
    }

    this.loadMore = this.loadMore.bind(this)
  }
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    const { products } = this.props
    const { visibleItem } = this.state

    return (
      <div className="Home">
        <Home>
          {this.showListProducts(products)}
        </Home>

        {products.length > 0 && products.length > visibleItem &&
          <div className="text-right">
            <Button variant="outline-primary" size="md" onClick={this.loadMore}>Load More</Button>
          </div>
        }
      </div>
    )
  }

  loadMore() {
    this.setState((state) => ({
      visibleItem: state.visibleItem + 5
    }), () => {
      console.log(this.state);
    })
  }

  showListProducts(products) {
    const { visibleItem } = this.state

    if (products.length > 0) {
      return products.slice(0, visibleItem).map((product, index) => {
        return (
          <Product
            key={index}
            product={product}
          />
        )
      })
    }
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => {
      dispatch(getProductsRequest())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

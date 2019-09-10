import React from 'react';
import './App.css';
import NavBarProducts from './components/navbar/navbar'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './container/home'
import NotFound from './views/NotFound/notFound'
import Products from './views/Products/products'
import Login from './container/login'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBarProducts />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/login" component={Login} />
            <Route path="" component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;

import React from 'react';
import './App.css';
import NavBarProducts from './components/navbar/navbar'
import routes from './routes'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBarProducts />
          {this.showMenuContent(routes)}
        </div>
      </Router>
    )
  }

  showMenuContent(routes) {
    let result = null

    if (routes.length > 0) {
      result = routes.map((route, index) => {
      console.log("TCL: App -> showMenuContent -> route", route)

        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        )
      })
    }

    return <Switch>{result}</Switch>
  }
}

export default App;

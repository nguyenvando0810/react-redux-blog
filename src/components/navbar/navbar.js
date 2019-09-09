import React from 'react';
import './navbar.scss'
import { Navbar, Nav, Container  } from 'react-bootstrap';
import logo from './../../assets/logo.png'
import { Route, Link } from 'react-router-dom'

const menus = [
  {
    name: 'Home',
    to: '/',
    exact: true
  },
  {
    name: 'Products',
    to: '/products',
    exact: false
  },
  {
    name: 'Contact',
    to: '/contact',
    exact: false
  },
  {
    name: 'About',
    to: '/about',
    exact: false
  },
]

const MenusLink = ({ label, to, active }) => {
  return (
    <Route
      path={to}
      exact={active}
      children={({ match }) => {
        let active = match ? 'active' : ''

        return (
          <Link to={to} className={`nav-link ${active}`}>{label}</Link>
        )
      }}
    />
  )
}

class NavBarProducts extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" width="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
          {this.showMenu(menus)}
          </Nav>
        </Navbar.Collapse>
        </Container>
       </Navbar>
    )
  }

  showMenu = (menus) => {
    if (menus.length > 0) {
      return menus.map((menu, index) => {
        return <MenusLink key={index} label={menu.name} to={menu.to} active={menu.exact} />
      })
    }
  }
}

export default NavBarProducts;

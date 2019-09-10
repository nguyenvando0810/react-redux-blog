import React from 'react'
import Home from './container/home'
import NotFound from './views/NotFound/notFound'
import Products from './views/Products/products'

const routes = [{
    path: '/',
    exact: true,
    main: () => < Home / >
  },
  {
    path: '/products',
    exact: false,
    main: () => < Products / >
  },
  {
    path: '',
    exact: false,
    main: () => < NotFound / >
  }
]

export default routes;
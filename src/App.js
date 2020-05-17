import React from 'react'

import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './routes'
import Layout from './components/hoc/layout'

function App() {
 return (
  <Router>
   <Layout>
    <Routes />
   </Layout>
  </Router>
 )
}

export default App

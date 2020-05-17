import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import Tab1 from './components/tables/tab1/Tab1'

const Routes = () => {
 return (
  <Switch>
   <Route path="/" component={Home} exact />
   <Route path="/tab1" component={Tab1} />
  </Switch>
 )
}

export default Routes

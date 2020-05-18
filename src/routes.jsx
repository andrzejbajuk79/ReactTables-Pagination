import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import Tab1 from './components/tables/Tab1'
import Tab2 from './components/tables/Tab2'
import Pagination from './components/Pagination/Piganation'

const Routes = () => {
 return (
  <Switch>
   <Route path="/" component={Home} exact />
   <Route path="/tab1" component={Tab1} />
   <Route path="/tab2" component={Tab2} />
   <Route path="/pagination" component={Pagination} />
  </Switch>
 )
}

export default Routes

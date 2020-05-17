import React from 'react'
import {NavLink} from './NavLinks'
import {Link} from 'react-router-dom'

//TODO: temporary page links
const pageLinks = [
 {to: '/tab1', label: 'Tab1', icon: 'ion-compose'},
 {to: '/formik4', label: 'Form4', icon: 'ion-gear-a'},
]

const Header = () => {
 return (
  <nav className="navbar navbar-light">
   <div className="container">
    <Link className="navbar-brand" to="/">
     START
    </Link>
    <ul className="nav navbar-nav pull-xs-right">
     {pageLinks.map((page, index) => (
      <NavLink key={index} {...page} />
     ))}
    </ul>
   </div>
  </nav>
 )
}
export default Header

import React from 'react';
import Header from '../StaticPages/header';
import Footer from '../StaticPages/Footer';


 const Layout = ({ children }) => {
 return (
   <>
     <Header />
     {children} 
     <Footer />
   </>
 );
};

export default Layout 

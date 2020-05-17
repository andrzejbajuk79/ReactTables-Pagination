import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Link to="/" className="logo-font">
          Start
        </Link>
        <span className="attribution">
          An interactive learning project from -
          <a href="https://heroku-abajuk-portfolio.herokuapp.com">-ABAJUK-</a>
          . Code &amp; design
          licensed under ABAJUK
        </span>
      </div>
    </footer>
  );
};

export default Footer;

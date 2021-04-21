import React from 'react';
import Logo from '../logo/logo';
import Nav from '../nav/nav';
import Search from '../search/search';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row middle-xs">
          <div className="col-xs-3">
            <Logo />
          </div>
          <div className="col-xs-7">
            <Nav />
          </div>
          <div className="col-xs-2">
            <Search />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
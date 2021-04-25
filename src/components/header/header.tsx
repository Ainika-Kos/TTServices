import React, { FC } from 'react';
import Logo from '../logo/logo';
import Nav from '../nav/nav';
import Search from '../search/search';
import './header.scss';

const Header: FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row middle-xs">
          <div className="col-xs-6 col-md-3">
            <Logo />
          </div>
          <div className="col-xs-12 col-md-7">
            <Nav />
          </div>
          <div className="col-xs-6 col-md-2">
            <Search />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
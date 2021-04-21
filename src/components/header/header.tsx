import React from 'react';
import Logo from '../logo/logo';
import Nav from '../nav/nav';
import Search from '../search/search';
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Nav />
      <Search />
    </div>
  );
};

export default Header;
import React, { FC } from 'react';
import Logo from '../../atoms/logo/logo';
import Nav from '../../molecules/nav/nav';
import Search from '../../atoms/search/search';
import './header.scss';

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
      </div>
      <div className="header__nav">
        <Nav />
      </div>
      <div className="header__search">
        <Search />
      </div>
    </header>
  );
};

export default Header;
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';

const Nav: FC = () => {
  return (
    <nav className="nav">
      <NavLink to="/blog" className="nav" activeClassName="selected">
        Blog
      </NavLink>
      <NavLink to="/projects" className="nav" activeClassName="selected">
        Projects
      </NavLink>
      <NavLink to="/services" className="nav" activeClassName="selected">
        Services
      </NavLink>
      <NavLink to="/news" className="nav" activeClassName="selected">
        News
      </NavLink>
      <NavLink to="/categories" className="nav" activeClassName="selected">
        Categories
      </NavLink>
      <NavLink to="/contacts" className="nav" activeClassName="selected">
        Contacts
      </NavLink>
    </nav>
  );
};

export default Nav;
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../logo/logo';
import './footer.scss';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <Logo />
      <div className="footer__info-wrapper">
        <div className="footer__info__contacts">
          <p className="text-uppercase">decision-2016</p>
          <p>Terms of use</p>
          <p className="text-orange">Gravpix</p>
          <p>All right reserved</p>
        </div>
        <div className="footer__info__navigation">  
          <NavLink to="/about" className="footer_nav" activeClassName="selected">
            ¬ About
          </NavLink>
          <NavLink to="/articles" className="footer_nav" activeClassName="selected">
            ¬ Articles
          </NavLink>
          <NavLink to="/news" className="footer_nav" activeClassName="selected">
            ¬ News
          </NavLink>
          <NavLink to="/blog" className="footer_nav" activeClassName="selected">
            ¬ Blog
          </NavLink>
        </div>
        <div className="footer__info__social">
          <span className="twitter">vk</span>
          <span className="instagram">inst</span>
          <span className="facebook">fb</span>
          <span className="youtube">yt</span>
        </div>
        <div className="footer__info__design">
          <p className="text-design">grafpix</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
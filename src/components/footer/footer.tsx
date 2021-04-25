import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Logo from '../logo/logo';
import './footer.scss';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <Logo />
      </div>
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
          <span className="twitter">
            <FontAwesomeIcon icon={faTwitter} size="1x" className="footer__info__social__icon" />
          </span>
          <span className="instagram">
            <FontAwesomeIcon icon={faInstagram} size="1x" className="footer__info__social__icon" />
          </span>
          <span className="facebook">
            <FontAwesomeIcon icon={faFacebook} size="1x" className="footer__info__social__icon" />
          </span>
          <span className="youtube">
            <FontAwesomeIcon icon={faYoutube} size="1x" className="footer__info__social__icon" />
          </span>
        </div>
        <div className="footer__info__design">
          <p className="text-design">grafpix</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
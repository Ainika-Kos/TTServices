import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './hamburger.scss';

const Hamburger: FC = () => {
  return (
    <div className="hamburger">
      <FontAwesomeIcon icon={faBars} size="lg" className="hamburger__icon" />
    </div>
  );
};

export default Hamburger;
import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './more.scss';

const More: FC = () => {
  return (
    <div className="more">
      <p className="more__text">More</p>
      <FontAwesomeIcon icon={faAngleDown} size="1x" className="more__icon" />
    </div>
  );
};

export default More;
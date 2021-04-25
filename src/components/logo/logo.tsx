import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import './logo.scss';

const Logo: FC = () => {

  const history = useHistory();

  const logoClickHandler = () => {
    history.push('/');
  };
    
  return (
    <div>
      <div
        className="logo"
        role="button"
        onClick={logoClickHandler}
        tabIndex={0}
        onKeyDown={logoClickHandler}
      >
        Decision
      </div>
    </div>
  );
};

export default Logo;
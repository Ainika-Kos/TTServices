import React from 'react';
import { useHistory } from 'react-router-dom';
import './logo.scss';

const Logo = () => {

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
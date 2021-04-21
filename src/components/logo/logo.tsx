import React from 'react';
import { useHistory } from 'react-router-dom';

const Logo = () => {

  const history = useHistory();

  const logoClickHandler = () => {
    history.push('/');
  };
    
  return (
    <div>
      <button type="button" onClick={logoClickHandler}>Logo</button>
    </div>
  );
};

export default Logo;
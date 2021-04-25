import React from 'react';
import { useHistory } from 'react-router-dom';

const Articles = () => {

  const history = useHistory();

  const goBackClickHandler = () => {
    history.push('/');
  };
    
  return (
    <div className="page">
      <h1>Page "Articles"</h1>
      <div
        className="page__goback"
        role="button"
        onClick={goBackClickHandler}
        tabIndex={0}
        onKeyDown={goBackClickHandler}
      >
        Go back Home
      </div>
    </div>
  );
};

export default Articles;
import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './search.scss';

const Search: FC = () => {
  return (
    <div className="search">
      <FontAwesomeIcon icon={faSearch} size="lg" className="search__icon" />
    </div>
  );
};

export default Search;
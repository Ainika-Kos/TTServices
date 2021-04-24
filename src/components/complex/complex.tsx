import React from 'react';
import NewsBlock from '../newsBlock/newsBlock';
import { newsData } from '../../data/newsData';
import './complex.scss';

const Complex = () => {


  return (
    <div className="complex">
      <div className="complex__news-wrapper">
        <NewsBlock newsData={newsData} />
      </div>
      <div className="complex__landscape-wrapper">
        <h1>landscape</h1>
        <div className="landscape__cards-wrapper">
          <p>Card</p>
          <p>Card</p>
        </div>
      </div>
      <div className="complex__articles-wrapper">
        <h1>Articles</h1>
        <p>Card</p>
      </div>
    </div>
  );
};

export default Complex;
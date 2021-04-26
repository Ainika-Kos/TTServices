import React, { FC } from 'react';
import { ArticlesType } from '../../../data/types';
import './cardArticles.scss';

const CardArticles: FC<ArticlesType> = ({ id, time, title }) => {
  return (
    <div className="cardArticles">
      <h4 className="cardArticles__title">{title}</h4>
      <p className="cardArticles__time">{time}</p>
    </div>
  );
};

export default CardArticles;
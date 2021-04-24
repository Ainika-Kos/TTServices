import React, { FC } from 'react';
import { NewsType } from '../../data/types';
import './cardNews.scss';

const CardNews: FC<NewsType> = ({
  id,
  time,
  title,
  text
}) => {
  return (
    <div className="cardNews">
      <p className="cardNews__time">{time}</p>
      <h2 className="cardNews__title">{title}</h2>
      <p className="cardNews__text">{text}</p>
    </div>
  );
};

export default CardNews;
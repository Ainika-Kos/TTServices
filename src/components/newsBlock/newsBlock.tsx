import React, { FC } from 'react';
import { NewsType } from '../../data/types';
import CardNews from '../cardNews/cardNews';
import './newsBlock.scss';

type NewsBlockProps = {
  newsData: NewsType[];
};

const NewsBlock: FC<NewsBlockProps> = ({ newsData }) => {

  return (
    <div className="newsBlock">
      <h2 className="newsBlock__title">News</h2>
      {newsData.map(({ id, time, title, text }) => {
        return (
          <div key={id}>
            <CardNews
              id={id}
              time={time}
              title={title}
              text={text}
            />
          </div>
        );
      })}
      <a href="/#" className="newsBlock__link">All news</a>
    </div>
  );
};

export default NewsBlock;
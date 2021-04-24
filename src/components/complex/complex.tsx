import React from 'react';
import NewsBlock from '../newsBlock/newsBlock';
import { newsData } from '../../data/newsData';
import { articlesData } from '../../data/articlesData';
import './complex.scss';
import Card from '../card/card';
import { cardsData } from '../../data/cardsData';
import CardArticles from '../cardArticles/cardArticles';

const Complex = () => {

  const landscapeData = cardsData.filter(({ category }) => category === 'landscapeCard');
  
  return (
    <div className="complex">
      <div className="complex__news-wrapper">
        <NewsBlock newsData={newsData} />
      </div>
      <div className="complex__landscape-wrapper">
        {landscapeData.map(({
          id,
          category,
          title,
          titleClass,
          time,
          timeClass,
          buttonText,
          buttonClass,
          background,
          photoCount
        }) => {
          return (
            <div key={id}>
              <Card
                id={id}
                category={category}
                title={title}
                titleClass={titleClass}
                time={time}
                timeClass={timeClass}
                buttonText={buttonText}
                buttonClass={buttonClass}
                background={background}
                photoCount={photoCount}
              />
            </div>
          );
        })}
        <div className="landscape__cards-wrapper">
          <p>Card</p>
          <p>Card</p>
        </div>
      </div>
      <div className="complex__articles-wrapper">
        {articlesData.map(({ id, title, time }) => {
          return (
            <div>
              <CardArticles
                id={id}
                title={title}
                time={time}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Complex;
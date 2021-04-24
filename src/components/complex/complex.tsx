import React from 'react';
import NewsBlock from '../newsBlock/newsBlock';
import { newsData } from '../../data/newsData';
import { articlesData } from '../../data/articlesData';
import './complex.scss';
import Card from '../card/card';
import { cardsData } from '../../data/cardsData';
import CardArticles from '../cardArticles/cardArticles';

const Complex = () => {

  const landscapeData = cardsData
    .filter(({ category }) => category === 'landscapeCard');

  const smallPostData = cardsData.filter(({ category }) => category === 'smallPostCard');
  
  return (
    <div className="complex">
      <div className="complex__news-wrapper">
        <NewsBlock newsData={newsData} />
      </div>
      <div className="complex__landscape-articles-cards-wrapper">
        <div className="complex__landscape-articles-wrapper">
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
            photoCount,
            image,
            icon
          }) => {
            return (
              <div className="complex__landscape-wrapper" key={id}>
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
                  image={image}
                  icon={icon}
                />
              </div>
            );
          })}
          <div className="complex__articles-wrapper">
            {articlesData.map((item) => {
              return (
                <div key={item.id}>
                  <CardArticles
                    id={item.id}
                    title={item.title}
                    time={item.time}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="complex__cards-wrapper">
          {smallPostData.map(({
            id,
            category,
            title,
            titleClass,
            time,
            timeClass,
            buttonText,
            buttonClass,
            background,
            photoCount,
            image,
            icon
          }) => {
            return (
              <div className="complex__card-wrapper" key={id}>
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
                  image={image}
                  icon={icon}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Complex;
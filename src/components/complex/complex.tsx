import React, { FC, useState, useEffect } from 'react';
import NewsBlock from '../newsBlock/newsBlock';
import { newsData } from '../../data/newsData';
import { articlesData } from '../../data/articlesData';
import './complex.scss';
import Card from '../card/card';
import { cardsData } from '../../data/cardsData';
import CardArticles from '../cardArticles/cardArticles';
import { sliderData } from '../../data/sliderData';

const Complex: FC = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const backgrounds = sliderData
    .filter(({ category }) => category === 'landscape');
  
  const length = backgrounds.length - 1;

  useEffect(() => {

    setTimeout(() => {
      if (activeIndex >= length) {
        setActiveIndex(0);
      } else {
        setActiveIndex(activeIndex + 1);
      }
    }, 3000);
    
  });

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
            icon,
            iconClass
          }) => {
            return (
              <div className={`complex__landscape-wrapper ${backgrounds[activeIndex].slide}`} key={id}>
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
                  iconClass={iconClass}
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
            icon,
            iconClass
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
                  iconClass={iconClass}
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
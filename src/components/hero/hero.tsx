import React from 'react';
import { cardsData } from '../../data/cardsData';
import Card from '../heroCard/card';
import './hero.scss';

const Hero = () => {

  const heroCardsData = cardsData.filter(({ category }) => category === 'heroCard');

  return (
    <div className="hero">
      {heroCardsData.map(({
        id,
        category,
        title,
        titleClass,
        time,
        timeClass,
        buttonText,
        buttonClass,
        background,
        photoCount, }) => {
        return (
          <div key={id} className="hero__card-wrapper">
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
    </div>
  );
};

export default Hero;
import React, { FC } from 'react';
import { CardType } from '../../data/types';
import Card from '../card/card';
import './hero.scss';

type HeroProps = {
  cardsCategoryData: CardType[];
};

const Hero: FC<HeroProps> = ({ cardsCategoryData }) => {


  return (
    <div className="hero">
      {cardsCategoryData.map(({
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
import React, { FC, useState, useEffect } from 'react';
import { CardType } from '../../data/types';
import Card from '../card/card';
import './hero.scss';

type HeroProps = {
  cardsCategoryData: CardType[];
};

const Hero: FC<HeroProps> = ({ cardsCategoryData }) => {

  const backgrounds = ['hero--1', 'hero--2', 'hero--3'];
  const length = backgrounds.length - 2;

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {

    setTimeout(() => {
      if (activeIndex > length) {
        setActiveIndex(0);
      } else {
        setActiveIndex(activeIndex + 1);
      }
    }, 3000);
    
  });


  return (
    <div className={`hero fade ${backgrounds[activeIndex]}`}>
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
        photoCount,
        image,
        icon
      }) => {
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
              image={image}
              icon={icon}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Hero;
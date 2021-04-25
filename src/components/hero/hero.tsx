import React, { FC, useState, useEffect } from 'react';
import { sliderData } from '../../data/sliderData';
import { CardType } from '../../data/types';
import Card from '../card/card';
import './hero.scss';

type HeroProps = {
  cardsCategoryData: CardType[];
};

const Hero: FC<HeroProps> = ({ cardsCategoryData }) => {

  const [activeIndex, setActiveIndex] = useState(0);

  const backgrounds = sliderData
    .filter(({ category }) => category === 'hero');
  
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

  return (
    <div className={`hero ${backgrounds[activeIndex].slide}`}>
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
        icon,
        iconClass
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
              iconClass={iconClass}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Hero;
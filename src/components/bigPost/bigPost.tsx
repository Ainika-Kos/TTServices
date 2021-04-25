import React, { FC, useState, useEffect } from 'react';
import { sliderData } from '../../data/sliderData';
import { CardType } from '../../data/types';
import Card from '../card/card';
import './bigPost.scss';

type BigPostProps = {
  cardsCategoryData: CardType[];
};

const BigPost: FC<BigPostProps> = ({ cardsCategoryData }) => {

  const [activeIndex, setActiveIndex] = useState(0);

  const backgrounds = sliderData
    .filter(({ category }) => category === 'bigPost');
  
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
    <div className={`bigPost ${backgrounds[activeIndex].slide}`}>
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
          <div key={id} className="bigPost__card-wrapper">
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

export default BigPost;
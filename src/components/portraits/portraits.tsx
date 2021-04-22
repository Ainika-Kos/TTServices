import React from 'react';
import { cardsData } from '../../data/cardsData';
import Card from '../heroCard/card';
import './portraits.scss';

const Portraits = () => {

  const portraitCardData = cardsData
    .filter(({ category }) => category === 'portraitCard')
    .filter(({ id }) => id >= 5 && id <= 8);
    
  return (
    <div className="portraits">
      {portraitCardData.map(({
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
      }) => {
        return (
          <div key={id} className="portraits__card-wrapper">
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

export default Portraits;
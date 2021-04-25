import React, { FC } from 'react';
import { CardType } from '../../data/types';
import Card from '../card/card';
import './portraits.scss';

type PortraitProps = {
  cardsCategoryData: CardType[];
};

const Portraits: FC<PortraitProps> = ({ cardsCategoryData }) => {

    
  return (
    <div className="portraits">
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

export default Portraits;
import React, { FC } from 'react';
import { CardType } from '../../data/types';
import Card from '../card/card';
import './bigPost.scss';

type BigPostProps = {
  cardsCategoryData: CardType[];
};

const BigPost: FC<BigPostProps> = ({ cardsCategoryData }) => {


  return (
    <div className="bigPost">
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
            />
          </div>
        );
      })}
    </div>
  );
};

export default BigPost;
import React, { FC } from 'react';
import { HeroCardType } from '../../data/types';
import Button from '../button/button';
import './heroCard.scss';

const HeroCard: FC<HeroCardType> = ({
  id,
  title,
  time,
  buttonText,
  buttonClass
}) => {
  return (
    <div className="heroCard">
      <Button text={buttonText} className={buttonClass} />
      <div className="heroCard__info-wrapper">
        <h1 className="heroCard__info__title">{ title }</h1>
        <p className="heroCard__info__time">{time}</p>
      </div>
      
    </div>
  );
};

export default HeroCard;
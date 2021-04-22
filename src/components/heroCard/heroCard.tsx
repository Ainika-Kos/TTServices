import React, { FC } from 'react';
import { CardType } from '../../data/types';
import Button from '../button/button';
import './heroCard.scss';

const HeroCard: FC<CardType> = ({
  id,
  title,
  time,
  buttonText,
  className,
  buttonClass,
  background,
}) => {
  return (
    <div className={`heroCard background ${background}`}>
      <Button text={buttonText} className={buttonClass} />
      <div className={`heroCard__info-wrapper ${className}`}>
        <h1 className="heroCard__info__title">{ title }</h1>
        <p className="heroCard__info__time">{time}</p>
      </div>
      
    </div>
  );
};

export default HeroCard;
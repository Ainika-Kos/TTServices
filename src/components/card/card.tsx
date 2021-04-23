import React, { FC } from 'react';
import { CardType } from '../../data/types';
import Button from '../button/button';
import './card.scss';

const Card: FC<CardType> = ({
  id,
  category,
  title,
  titleClass,
  time,
  timeClass,
  buttonText,
  buttonClass,
  background,
  photoCount
}) => {
  return (
    <div className={`card ${category} ${background}`}>
      <Button text={buttonText} buttonClass={buttonClass} />
      <div className="card__info-wrapper">
        <h1 className={`card__info__title ${titleClass}`}>{ title }</h1>
        <p className={`card__info__time ${timeClass}`}>{time}</p>
      </div>
      
    </div>
  );
};

export default Card;
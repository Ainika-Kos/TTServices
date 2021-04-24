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
  photoCount,
  image,
  icon }) => {

  const imageURL = `${process.env.PUBLIC_URL}/images/${image}.jpg`;
  const iconURL = `${process.env.PUBLIC_URL}/images/${icon}.jpg`;

  return (
    
    <div className={`card ${category} ${background}`}>
      {image.length > 0 ? (
        <img src={imageURL} className="card__image" alt={image} />) : ('')}
      <Button text={buttonText} buttonClass={buttonClass} />
      <div className="card__info-wrapper">
        <h1 className={`card__info__title ${titleClass}`}>{ title }</h1>
        <p className={`card__info__time ${timeClass}`}>{time}</p>
      </div>
    </div>
  );
};

export default Card;
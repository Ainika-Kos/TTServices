import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { CardType } from '../../../data/types';
import Button from '../../atoms/button/button';
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
  icon,
  iconClass
}) => {

  const imageURL = `${process.env.PUBLIC_URL}/images/${image}.jpg`;

  return (
    
    <div className={`card ${category} ${background}`}>
      {image ? (
        <img src={imageURL} className="card__image" alt={image} />) : ('')}
      <Button text={buttonText} buttonClass={buttonClass} />
      <div className="card__info-wrapper">
        <h1 className={`card__info__title ${titleClass}`}>{ title }</h1>
        <p className={`card__info__time ${timeClass}`}>{time}</p>
      </div>
      {icon ? (
        <div className="card__icon-wrapper">
          <span className="card__photoCount">{photoCount}</span>
          <FontAwesomeIcon icon={faCameraRetro} size="7x" className={`card__icon ${iconClass}`} />
        </div> ) : ('')}
    </div>
  );
};

export default Card;
import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { CardType } from '../../data/types';
import Button from '../button/button';
import Card from '../card/card';
import './photoGallery.scss';

type PhotoGalleryProps = {
  cardsCategoryData: CardType[];
};

const PhotoGalery: FC<PhotoGalleryProps> = ({ cardsCategoryData }) => {

    
  return (
    <div className="photoGallery">
      <div className="photoGallery__all">
        <h2 className="photoGallery__all__title">photo gallery</h2>
        <FontAwesomeIcon icon={faArrowRight} size="1x" className="photoGallery__all__icon" />
        <Button text="All galleries" buttonClass="gallery" />
      </div>
      <div className="photoGallery__cards-wrapper">
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
            <div key={id} className="photoGallery__card-wrapper">
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
    </div>
  );
};

export default PhotoGalery;
import React from 'react';
import { heroCardData } from '../../data/heroCards';
import HeroCard from '../heroCard/heroCard';
import './hero.scss';

const Hero = () => {
  return (
    <div className="hero">
      {heroCardData.map(({
        id, title, time, buttonText, className, buttonClass, background }) => {
        return (
          <div key={id} className="hero__card-wrapper">
            <HeroCard
              id={id}
              title={title}
              time={time}
              buttonText={buttonText}
              className={className}
              buttonClass={buttonClass}
              background={background}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Hero;
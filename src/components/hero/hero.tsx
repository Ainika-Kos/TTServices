import React from 'react';
import { heroCardData } from '../../data/heroCards';
import HeroCard from '../heroCard/heroCard';
import './hero.scss';

const Hero = () => {
  return (
    <div className="hero">
      {heroCardData.map(({ id, title, time, buttonText, buttonClass }) => {
        return (
          <div key={id} className="hero__card-wrapper">
            <HeroCard
              id={id}
              title={title}
              time={time}
              buttonText={buttonText}
              buttonClass={buttonClass}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Hero;
import React from 'react';
import { portraitsCardData } from '../../data/portraitCards';
import HeroCard from '../heroCard/heroCard';
import './portraits.scss';

const Portraits = () => {
  return (
    <div className="portraits">
      {portraitsCardData.map(({
        id, title, time, buttonText, className, buttonClass, background }) => {
        return (
          <div key={id} className="portraits__card-wrapper">
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

export default Portraits;
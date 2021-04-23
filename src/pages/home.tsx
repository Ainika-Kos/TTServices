import React from 'react';
import BigPost from '../components/bigPost/bigPost';
import Hero from '../components/hero/hero';
import More from '../components/more/more';
import Portraits from '../components/portraits/portraits';
import { cardsData } from '../data/cardsData';

const Home = () => {

  const heroCardsData = cardsData.filter(({ category }) => category === 'heroCard');
  
  const portraitCardDataFirst = cardsData
    .filter(({ category }) => category === 'portraitCard')
    .filter(({ id }) => id >= 5 && id <= 8);
  
  const portraitCardDataSecond = cardsData
    .filter(({ category }) => category === 'portraitCard')
    .filter(({ id }) => id >= 14 && id <= 17);
  
  const bigPostCardData = cardsData.filter(({ category }) => category === 'bigPostCard');
  
  return (
    <div>
      <section>
        <Hero cardsCategoryData={heroCardsData} />
      </section>
      <section>
        <Portraits cardsCategoryData={portraitCardDataFirst} />
      </section>
      <section>
        <BigPost cardsCategoryData={bigPostCardData} />
      </section>
      <section>
        <Portraits cardsCategoryData={portraitCardDataSecond} />
      </section>
      <section>
        <More />
      </section>
    </div>
    
  );
};

export default Home;
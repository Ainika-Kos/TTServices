import React from 'react';
import BigPost from '../components/bigPost/bigPost';
import Hero from '../components/hero/hero';
import More from '../components/more/more';
import Portraits from '../components/portraits/portraits';
import { cardsData } from '../data/cardsData';

const Home = () => {

  const heroCardsData = cardsData
    .filter(({ category }) => category === 'heroCard');
  
  const portraitCardDataBig = cardsData
    .filter(({ category }) => category === 'portraitCardBig');
  
  const portraitCardDataSmall = cardsData
    .filter(({ category }) => category === 'portraitCardSmall');
  
  const bigPostCardData = cardsData
    .filter(({ category }) => category === 'bigPostCard');
  
  return (
    <div>
      <section>
        <Hero cardsCategoryData={heroCardsData} />
      </section>
      <section>
        <Portraits cardsCategoryData={portraitCardDataBig} />
      </section>
      <section>
        <BigPost cardsCategoryData={bigPostCardData} />
      </section>
      <section>
        <Portraits cardsCategoryData={portraitCardDataSmall} />
      </section>
      <section>
        <More />
      </section>
    </div>
    
  );
};

export default Home;
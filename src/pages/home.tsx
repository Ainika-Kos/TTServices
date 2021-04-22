import React from 'react';
import Hero from '../components/hero/hero';
import Portraits from '../components/portraits/portraits';

const Home = () => {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section>
        <Portraits />
      </section>
    </div>
    
  );
};

export default Home;
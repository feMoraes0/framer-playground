import React from 'react';
import './Home.css';
import Card from '../components/Card';

const Home = () => (
  <div id='home'>
    <h1>Home</h1>
    <div className='cards'>
      <Card
        url='/dark-theme'
        title='Dark Theme'
        description='Dark theme switch with cool animation.'
      />
    </div>
  </div>
);

export default Home;

import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import Card from '../components/Card';

const titleVariants = {
  initial: { y: '-100vh' },
  animate: {
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 75,
    },
  },
};

const Home = () => (
  <div id='home'>
    <motion.h1
      variants={titleVariants}
      initial='initial'
      animate='animate'
    >
      Home
    </motion.h1>
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

import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import Card from '../components/Card';

const homeVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.5,
    },
  },
};

const titleVariants = {
  initial: { y: '-100vh' },
  animate: {
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 75,
      duration: 1,
    },
  },
};

const cardsVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const Home = () => (
  <motion.div
    id='home'
    variants={homeVariants}
    initial='initial'
    animate='animate'
  >
    <motion.h1
      variants={titleVariants}
    >
      Home
    </motion.h1>
    <motion.div
      className='cards'
      variants={cardsVariants}
    >
      <Card
        url='/dark-theme'
        title='Dark Theme'
        description='Dark theme switch with cool animation.'
      />
      <Card
        url='/background-words'
        title='Background Words'
        description='Animation when page is loaded on screen.'
      />
    </motion.div>
  </motion.div>
);

export default Home;

import React from 'react';
import './Background.css';
import { motion } from 'framer-motion';

const backSideVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.4,
      staggerDirection: -1,
    },
  },
};

const backSideTextVariants = {
  initial: { y: '-100vh' },
  animate: {
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const Background = () => (
  <div id='background'>
    <motion.div
      variants={backSideVariants}
      initial='initial'
      animate='animate'
      className='back-side'
    >
      <motion.span variants={backSideTextVariants}>TESTING</motion.span>
      <motion.span variants={backSideTextVariants}>REACTJS</motion.span>
      <motion.span variants={backSideTextVariants}>ANIMATION</motion.span>
    </motion.div>
    <motion.div className='front-side'>
      <motion.span>framer</motion.span>
      <motion.span>motion</motion.span>
    </motion.div>
  </div>

);

export default Background;

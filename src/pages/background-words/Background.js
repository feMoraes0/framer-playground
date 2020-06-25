import React from 'react';
import './Background.css';
import { motion } from 'framer-motion';

const backSizeVariants = {
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

const backSizeTextVariants = {
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
      variants={backSizeVariants}
      initial='initial'
      animate='animate'
      className='back-side'
    >
      <motion.h1 variants={backSizeTextVariants}>BACK 01</motion.h1>
      <motion.h1 variants={backSizeTextVariants}>BACK 02</motion.h1>
      <motion.h1 variants={backSizeTextVariants}>BACK 03</motion.h1>
    </motion.div>
    <motion.div className='front-side'>
      <motion.h1>frontal</motion.h1>
      <motion.h1>text</motion.h1>
    </motion.div>
  </div>

);

export default Background;

import React from 'react';
import './Background.css';
import { motion } from 'framer-motion';

const sideVariants = {
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

const fontSideVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.5,
      staggerDirection: 1,
    },
  },
};

const frontSideTextVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const frontSideLetterVariants = {
  initial: { y: '100vh' },
  animate: {
    y: 0,
    transition: {
      duration: 1.0,
    },
  },
};

const Background = () => (
  <div id='background'>
    <motion.div
      variants={sideVariants}
      initial='initial'
      animate='animate'
      className='back-side'
    >
      <motion.span variants={backSideTextVariants}>TESTING</motion.span>
      <motion.span variants={backSideTextVariants}>REACTJS</motion.span>
      <motion.span variants={backSideTextVariants}>ANIMATION</motion.span>
    </motion.div>
    <motion.div
      className='front-side'
      variants={fontSideVariants}
      initial='initial'
      animate='animate'
    >
      <motion.div
        variants={frontSideTextVariants}
        className='word'
      >
        <motion.div variants={frontSideLetterVariants}>F</motion.div>
        <motion.div variants={frontSideLetterVariants}>R</motion.div>
        <motion.div variants={frontSideLetterVariants}>A</motion.div>
        <motion.div variants={frontSideLetterVariants}>M</motion.div>
        <motion.div variants={frontSideLetterVariants}>E</motion.div>
        <motion.div variants={frontSideLetterVariants}>R</motion.div>
      </motion.div>
      <motion.div
        variants={frontSideTextVariants}
        className='word'
      >
        <motion.div variants={frontSideLetterVariants}>M</motion.div>
        <motion.div variants={frontSideLetterVariants}>O</motion.div>
        <motion.div variants={frontSideLetterVariants}>T</motion.div>
        <motion.div variants={frontSideLetterVariants}>I</motion.div>
        <motion.div variants={frontSideLetterVariants}>O</motion.div>
        <motion.div variants={frontSideLetterVariants}>N</motion.div>
      </motion.div>
    </motion.div>
  </div>
);

export default Background;

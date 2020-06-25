import React from 'react';
import './Background.css';
import { motion } from 'framer-motion';

const Background = () => (
  <div id='background'>
    <motion.div className='back-side'>
      <motion.h1>BACK 01</motion.h1>
      <motion.h1>BACK 02</motion.h1>
      <motion.h1>BACK 03</motion.h1>
    </motion.div>
    <motion.div className='front-side'>
      <motion.h1>frontal text</motion.h1>
    </motion.div>
  </div>

);

export default Background;

import React, { useState } from 'react';
import './HiddenMenu.css';
import { FiX, FiMenu } from 'react-icons/fi';
import { motion } from 'framer-motion';

const hiddenMenuVariants = {
  close: {
    overflowY: 'auto',
  },
  open: {
    overflowY: 'hidden',
    maxHeight: '100vh',
  },
};

const bodyVariants = {
  close: {
    borderRadius: 0,
    x: 0,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.5,
    },
  },
  open: {
    borderRadius: 30,
    x: '45vw',
    y: '7.5vh',
    rotate: -15,
    transition: {
      duration: 0.5,
    },
  },
};

const HiddenMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className='hidden-menu'
      variants={hiddenMenuVariants}
      animate={isOpen ? 'open' : 'close'}
    >
      <div className='menu'>
        <button type='button' onClick={() => setIsOpen(false)}>
          <FiX size={30} />
        </button>
        <ul>
          <li>Menu #1</li>
          <li>Menu #2</li>
          <li>Menu #3</li>
          <li>Menu #4</li>
          <li>Menu #5</li>
          <li>Menu #6</li>
        </ul>
      </div>
      <motion.div
        variants={bodyVariants}
        animate={isOpen ? 'open' : 'close'}
        className='body'
      >
        <button type='button' onClick={() => setIsOpen(true)}>
          <FiMenu size={30} />
        </button>
        <p>Hello World</p>
      </motion.div>
    </motion.div>
  );
};

export default HiddenMenu;

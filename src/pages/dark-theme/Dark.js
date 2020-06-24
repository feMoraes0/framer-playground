import React from 'react';
import './Dark.css';
import { RiArrowLeftLine, RiMoonLine, RiSunLine } from 'react-icons/ri';
import { motion, useCycle } from 'framer-motion';
import { Link } from 'react-router-dom';

const backgroundVariants = {
  light: (width) => ({
    clipPath: `circle(22px at ${width - 45}px 45px)`,
    transition: { duration: 0.7, ease: 'easeOut' },
  }),
  dark: (width) => ({
    clipPath: `circle(${width * 1.8}px at ${width - 45}px 45px)`,
    backgroundColor: '#282c34',
    transition: { duration: 0.7, ease: 'easeIn' },
  }),
};

const buttonVariants = {
  light: { color: '#FFFFFF', backgroundColor: '#282C34' },
  dark: { color: '#282c34', backgroundColor: '#FFFFFF' },
};

const textVariants = {
  light: { color: '#282c34' },
  dark: { color: '#FFFFFF' },
};

const Dark = () => {
  const [lightOn, setLightOn] = useCycle(true, false);
  const width = window.innerWidth;
  return (
    <>
      <motion.div
        variants={backgroundVariants}
        animate={(lightOn) ? 'light' : 'dark'}
        custom={width}
        className='background-theme'
      />
      <div id='dark-container'>
        <Link to='/' className='back-button'>
          <motion.div
            variants={textVariants}
            animate={(lightOn) ? 'light' : 'dark'}
          >
            <RiArrowLeftLine size={30} />
          </motion.div>
        </Link>
        <motion.button
          type='button'
          className='switcher'
          onClick={() => setLightOn()}
          variants={buttonVariants}
          animate={(lightOn) ? 'light' : 'dark'}
        >
          {(lightOn) ? <RiSunLine size={25} /> : <RiMoonLine size={25} />}
        </motion.button>
        <motion.h1
          variants={textVariants}
          animate={(lightOn) ? 'light' : 'dark'}
        >
          Dark Theme Switch
        </motion.h1>
        <motion.h3
          variants={textVariants}
          animate={(lightOn) ? 'light' : 'dark'}
        >
          Press the button at the top right to switch between light and dark theme.
        </motion.h3>
      </div>
    </>
  );
};

export default Dark;

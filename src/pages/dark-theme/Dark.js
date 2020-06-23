import React from 'react';
import './Dark.css';
import { RiLightbulbFlashLine, RiLightbulbLine } from 'react-icons/ri';
import { motion, useCycle } from 'framer-motion';

const backgroundVariants = {
  light: (width) => ({
    clipPath: `circle(0px at ${width - 45}px 45px)`,
    transition: { duration: 0.8 },
  }),
  dark: (width) => ({
    clipPath: `circle(${width * 1.8}px at ${width - 45}px 45px)`,
    backgroundColor: '#282c34',
    transition: { duration: 0.8 },
  }),
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
        <button type='button' className='switcher' onClick={() => setLightOn()}>
          {(lightOn) ? <RiLightbulbLine size={25} /> : <RiLightbulbFlashLine size={25} />}
        </button>
        <h1>Dark Theme Switch</h1>
        <h3>Press the lamp to switch between light and dark theme.</h3>
      </div>
    </>
  );
};

export default Dark;

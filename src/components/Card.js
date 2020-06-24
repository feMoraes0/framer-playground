import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const cardVariants = {
  initial: {
    opacity: 0,
    y: '200px',
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const Card = ({ url, title, description }) => (
  <motion.div variants={cardVariants}>
    <Link to={url}>
      <div className='card'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  </motion.div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Card;

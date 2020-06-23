import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ title, description }) => (
  <div className='card'>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;

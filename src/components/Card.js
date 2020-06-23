import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({ url, title, description }) => (
  <Link to={url}>
    <div className='card'>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </Link>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Card;

import React from 'react';
import propTypes from 'prop-types';

function Button(props) {
  const { name } = props;
  return <div>{name}</div>;
}

Button.propTypes = {
  name: propTypes.string.isRequired,
};

export default Button;

import React from 'react';
import propTypes from 'prop-types';

function Button(props) {

  const { name } = props;
  return (
    <div>{name}</div>

  );
}

Button.defaultProps = {
  wide: false,
  color: 'orange',
};

Button.propTypes = {
  name: propTypes.string.isRequired,

};

export default Button;

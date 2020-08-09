import React from 'react';
import propTypes from 'prop-types';

function Display(props) {
  const { result } = props;
  return <div>{result}</div>;
}

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: propTypes.string,
};

export default Display;

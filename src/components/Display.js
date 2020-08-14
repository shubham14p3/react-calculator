import React from 'react';// eslint-disable-line no-use-before-define
import PropTypes from 'prop-types';// eslint-disable-line no-use-before-define

const Display = (props) => (
    <div className="display">
      <div>
        {props.result}
      </div>
    </div>
);

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

Display.defaultProps = {
  result: '0',
};
export default Display;
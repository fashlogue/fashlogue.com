import * as React from 'react';
import { PropTypes } from 'prop-types';

const baseStyles = {
  display: 'flex',
  flexDirection: 'column', 
};

const base = ({
  children,
  style,
}) => {
  return (
    <div style={{
      ...style,
      ...baseStyles,
    }}>{children}</div>
  );
};

base.propTypes = {
  style:  PropTypes.object
};

export default base;

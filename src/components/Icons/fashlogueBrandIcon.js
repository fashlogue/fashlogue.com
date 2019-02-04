import * as React from 'react';
import { PropTypes } from 'prop-types';

const fashlogueBrandIcon = ({
  ...style
}) => {
  return(
    <svg style={{...style}} id="icon-Fashlog-Logo" viewBox="0 0 32 32">
      <title>Fashlog-Logo</title>
      <path fill="#EC6C68" d="M16.2,31C8.1,31,1.5,24.4,1.5,16.2S8.1,1.5,16.2,1.5S31,8.1,31,16.2S24.4,31,16.2,31z M16.2,4.5
                C9.8,4.5,4.5,9.8,4.5,16.2S9.8,28,16.2,28S28,22.7,28,16.2S22.7,4.5,16.2,4.5z"/>
      <path 
        fill="#EC6C68" 
        d="M23,10.4h-6.8v3.7H22c0.3,0,0.5-0.2,0.6-0.4l1-2.5C23.8,10.9,23.4,10.4,23,10.4z"
      />
      <path 
        fill="#EC6C68" 
        d="M20.3,15.3h-4v3.7h3c0.3,0,0.5-0.2,0.6-0.4l1-2.5C21.1,15.8,20.8,15.3,20.3,15.3z"
      />
      <path 
        fill="#EC6C68" 
        d="M11.4,23.3c0,0.4,0.3,0.6,0.6,0.6h3.1v-3.7h-3.7V23.3z"
      />
      <rect 
        x="11.4"
        y="15.3" 
        fill="#EC6C68" 
        width="3.7" 
        height="3.7"
      />
      <path 
        fill="#EC6C68" 
        d="M11.4,11.1v3.1h3.7v-3.7H12C11.7,10.4,11.4,10.7,11.4,11.1z"
      />
    </svg>
  ); 
};

fashlogueBrandIcon.propTypes = {
  style:  PropTypes.object
};
export default fashlogueBrandIcon;
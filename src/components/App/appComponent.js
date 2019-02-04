import * as React from 'react';
import { PropTypes } from 'prop-types';
import {
  Base,
  GlobalStyle,
} from '../UI';
import { Header } from '../Header';

const appComponent = ({ children, ...props }) => {

  return (
    <Base>
      <GlobalStyle />
      <Base style={{
        width: '100%'
      }}>
        <Header {...props}/>
      </Base>
      <Base>
        {children}
      </Base>
    </Base>
  );
};

appComponent.propTypes = {
  children: PropTypes.element,
};
export default appComponent;

import React from 'react';
import  styled  from 'styled-components';
import { Check } from '../../Icons';

/**
 * @method HiddenCheckbox - this is a hidden checkbox
 * 
 * @return {React.ReactNode}
 */

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  // Hide checkbox visually but remain accessible to screen readers.
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`
export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => props.checked ? 'salmon' : 'papayawhip'}
  border-radius: 3px;
  transition: all 150ms;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }
  ${Check} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }
`

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`
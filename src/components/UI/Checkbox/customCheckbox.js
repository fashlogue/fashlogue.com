import React from 'react';
import {
    HiddenCheckbox,
    StyledCheckbox,
    CheckboxContainer
}   from  './nativeCheckbox';
import { Check } from '../../Icons';

const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
      <Check viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Check>
    </StyledCheckbox>
    </CheckboxContainer>
)

export default Checkbox;
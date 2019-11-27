import React from 'react';

import { StyledButton } from './styles';

export default function Button({ children, kind, type }) {
  return (
    <StyledButton kind={kind} type={type}>
      {children}
    </StyledButton>
  );
}

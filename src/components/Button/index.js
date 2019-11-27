import React from 'react';

import { StyledButton } from './styles';

export default function Button({ children, kind }) {
  return <StyledButton kind={kind}>{children}</StyledButton>;
}

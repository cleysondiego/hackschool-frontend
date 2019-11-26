import React from 'react';
import { Input } from '@rocketseat/unform';

import { Container } from './styles';
import { StyledForm } from './styles';

export default function NewRoom() {
  return (
    <Container>
      <StyledForm>
        <label htmlFor="name">Nome da Sala</label>
        <Input name="name" />
      </StyledForm>
    </Container>
  );
}

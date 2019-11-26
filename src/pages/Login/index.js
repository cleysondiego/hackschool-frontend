import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Input } from '@rocketseat/unform';

import { Container, StyledForm } from './styles';

export default function Login() {
  const [redirect, setRedirect] = useState(false);

  function handleSubmit(data) {
    console.log(data);
    setRedirect(true);
  }

  if (redirect) {
    return <Redirect to="/home" />;
  }

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <Input name="email" />
        </div>

        <div>
          <label htmlFor="password">Senha:</label>
          <Input name="password" type="password" />
        </div>

        <button type="submit">Entrar</button>
      </StyledForm>
    </Container>
  );
}

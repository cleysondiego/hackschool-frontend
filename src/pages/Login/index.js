import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '../../components/Button';

import { Container, StyledForm, Title, StyledInput } from './styles';

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
          <Title>Login</Title>
        </div>
        <div>
          <div>
            <StyledInput name="email" placeholder="Informe seu e-mail" />
          </div>

          <div>
            <StyledInput
              name="password"
              type="password"
              placeholder="Informe sua senha"
            />
          </div>
          <center>
            <Button type="submit" kind="primary">
              Entrar
            </Button>
          </center>
        </div>
      </StyledForm>
    </Container>
  );
}

import React from 'react';

import { Container } from './styles';
import { StyledInput, Title } from '../Login/styles';
import Button from '../../components/Button';
import { RoomStyledForm } from './styles';

export default function NewRoom() {
  return (
    <Container>
      <RoomStyledForm>
        <div>
          <Title>Criar uma sala</Title>
          <StyledInput name="name" placeholder="Insira o nome da sala" />
        </div>
        <center>
          <Button kind="primary" type="submit">
            Criar
          </Button>
        </center>
      </RoomStyledForm>
    </Container>
  );
}

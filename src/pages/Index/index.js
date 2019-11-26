import React from 'react';
import { Link } from 'react-router-dom';

import { Container, RoomList, Room } from './styles';

export default function Index() {
  return (
    <Container>
      <center>
        <Link to="/rankings">Exibir Rankings</Link>
        <Link to="/new-room">Adicionar nova sala</Link>
      </center>
      <RoomList>
        <Room>Sala 1</Room>
        <Room>Sala 2</Room>
        <Room>Sala 3</Room>
        <Room>Sala 4</Room>
        <Room>Sala 5</Room>
        <Room>Sala 6</Room>
        <Room>Sala 7</Room>
      </RoomList>
    </Container>
  );
}

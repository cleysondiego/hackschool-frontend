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
        <Room>
          <Link to="/room/1">Sala 1</Link>
        </Room>

        <Room>
          <Link to="/room/2">Sala 2</Link>
        </Room>

        <Room>
          <Link to="/room/3">Sala 3</Link>
        </Room>

        <Room>
          <Link to="/room/4">Sala 4</Link>
        </Room>
      </RoomList>
    </Container>
  );
}

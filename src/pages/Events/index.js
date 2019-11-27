import React from 'react';
import { Link } from 'react-router-dom';

import { Container, EventsList, Event } from './styles';

export default function Events() {
  return (
    <Container>
      <center>
        <h1>Events</h1>
      </center>

      <EventsList>
        <Event>
          <Link to="/">
            <img
              src="https://rocketseat.com.br/static/images/logo-rocketseat.svg"
              alt=""
            />
            <div>
              <h1>RS/XP</h1>
              <p>
                Essa é uma descrição muita massa desse curso que eu
                particulamente já considero pakas
              </p>
            </div>
          </Link>
        </Event>
      </EventsList>
    </Container>
  );
}

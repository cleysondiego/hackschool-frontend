import React from 'react';

import { Container, EventsList, Event, Title, EventDate } from './styles';

export default function Events() {
  return (
    <Container>
      <center>
        <h1>Eventos</h1>
      </center>

      <EventsList>
        <Event>
          <a
            href="https://rocketseat.com.br/experience"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://rocketseat.com.br/static/images/logo-rocketseat.svg"
              alt=""
            />
            <div>
              <EventDate>25 à 27 de Novembro</EventDate>
              <Title>RS/XP</Title>
              <p>
                Essa é uma descrição muita massa desse evento que eu
                particulamente já considero pakas
              </p>
              <small>São Paulo Expo Center</small>
            </div>
          </a>
        </Event>
      </EventsList>
    </Container>
  );
}

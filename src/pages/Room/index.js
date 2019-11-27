import React from 'react';

import { Container, StudentsList, Student, Title } from './styles';

export default function Room() {
  return (
    <Container>
      <center>
        <Title>Alunos da Sala 01</Title>
      </center>

      <StudentsList>
        <Student>
          <p>01</p>
          Polette
          <p>3000</p>
        </Student>

        <Student>
          <p>02</p>
          Bolette
          <p>3000</p>
        </Student>

        <Student>
          <p>03</p>
          Luan Santana
          <p>3000</p>
        </Student>

        <Student>
          <p>04</p>
          PIZZA
          <p>3000</p>
        </Student>
      </StudentsList>
    </Container>
  );
}

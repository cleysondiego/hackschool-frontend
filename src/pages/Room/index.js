import React from 'react';

import { Container, StudentsList, Student, Title } from './styles';

export default function Room() {
  return (
    <Container>
      <center>
        <Title>Alunos da Sala 01</Title>
      </center>

      <StudentsList>
        <Student>Cleysu</Student>

        <Student>Cleysu</Student>

        <Student>Cleysu</Student>

        <Student>Cleysu</Student>

        <Student>Cleysu</Student>
      </StudentsList>
    </Container>
  );
}

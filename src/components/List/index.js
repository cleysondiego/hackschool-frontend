import React from 'react';
import { Container, Title } from './styles';

export default function List({ children, title }) {
  return (
    <Container>
      <Title>{title}</Title>
      <div>{children}</div>
    </Container>
  );
}

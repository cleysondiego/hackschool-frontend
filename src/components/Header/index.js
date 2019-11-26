import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="/courses">Cursos</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/events">Eventos</Link>
      <Link to="/login">Login</Link>
    </Container>
  );
}

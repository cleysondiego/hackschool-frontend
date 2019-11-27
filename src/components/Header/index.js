import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <h1>
        <span>HACKA</span>SCHOOL
      </h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/courses">Cursos</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/events">Eventos</Link>
        <Link to="/motivation">Motivação</Link>
        <Link to="/login">Login</Link>
      </div>
    </Container>
  );
}

import React from 'react';

import { Container } from './styles';
import { StyledForm, StyledInput, Title } from '../Login/styles';
import Button from '../../components/Button';

export default function NewProject() {
  return (
    <Container>
      <StyledForm style={{ width: '40%', marginTop: '20px' }}>
        <Title>Criar Projeto</Title>
        <StyledInput name="title" placeholder="Título" />
        <StyledInput name="description" placeholder="Descrição" />
        <StyledInput name="teacher" placeholder="Professor" />
        <StyledInput name="tags" placeholder="Tags separadas por ;" />
        <StyledInput
          name="courses"
          placeholder="Lista dos cursos separdos por ;"
        />
        <center>
          <Button kind="primary">Criar</Button>
        </center>
      </StyledForm>
    </Container>
  );
}

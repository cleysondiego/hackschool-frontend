import React from 'react';

import List from '../../components/List';
import {
  Container,
  CourseCard,
  CourseCardDescription,
  CourseCardTitle,
} from './styles';

export default function Home() {
  return (
    <Container>
      <List title="Cursos">
        <CourseCard>
          <img
            src="https://static.imagemwhats.com.br/content/assetz/uploads/2017/04/imagem-engracada-de-bom-sabado.jpg"
            alt="Imagem doida"
          />
          <div>
            <CourseCardTitle>Título daora</CourseCardTitle>
            <CourseCardDescription>Descrição fodooona</CourseCardDescription>
          </div>
        </CourseCard>

        <CourseCard>
          <img
            src="https://static.imagemwhats.com.br/content/assetz/uploads/2017/04/imagem-engracada-de-bom-sabado.jpg"
            alt="Imagem doida"
          />
          <div>
            <CourseCardTitle>Título daora</CourseCardTitle>
            <CourseCardDescription>Descrição fodooona</CourseCardDescription>
          </div>
        </CourseCard>

        <CourseCard>
          <img
            src="https://static.imagemwhats.com.br/content/assetz/uploads/2017/04/imagem-engracada-de-bom-sabado.jpg"
            alt="Imagem doida"
          />
          <div>
            <CourseCardTitle>Título daora</CourseCardTitle>
            <CourseCardDescription>Descrição fodooona</CourseCardDescription>
          </div>
        </CourseCard>
      </List>
    </Container>
  );
}

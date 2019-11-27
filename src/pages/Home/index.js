import React, { useEffect } from 'react';

import List from '../../components/List';
import {
  Container,
  CourseCard,
  CourseCardDescription,
  CourseCardTitle,
  EventCard,
  EventCardDescription,
  EventCardTitle,
  Content,
} from './styles';
import Button from '../../components/Button';
import dev from '../../assets/dev.jpg';

export default function Home() {
  return (
    <Container>
      <Content>
        <div>
          <h1>
            <span>Salve</span> manolo
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            quis tristique lectus. Sed nisl ante, dignissim sit amet nulla ut,
            accumsan congue eros. Sed orci dolor, varius imperdiet luctus et,
            tempus eu justo. Nullam ac sem massa
          </p>
          <div>
            <Button kind="primary">Motivação</Button>
            <Button>Cursos</Button>
          </div>
        </div>

        <img src={dev} alt="adas" />
      </Content>
    </Container>
  );
}

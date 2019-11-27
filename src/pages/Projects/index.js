import React from 'react';

import { Container, ProjectList, Project, Title, Tags, Infos } from './styles';

export default function Projects(props) {
  return (
    <Container>
      <center>
        <h1>Projetos</h1>
      </center>
      <button onClick={() => props.history.push('/new-project')}>
        Adicionar novo projeto
      </button>
      <ProjectList>
        <Project>
          <Infos>
            <p>Professor José Antônio</p>
            <p>25/11/2019</p>
          </Infos>
          <Title>Realidade Aumentada - Química</Title>
          <p>
            Desejo utilizar realidade aumentada nas aulas de química, por que o
            bagulho aqui é muito loko irmão, chama nois. CHAAAAMAAA. PAAAW.
            PIZZA
          </p>
          <Tags>
            <p>Python</p>
            <p>Javascript</p>
          </Tags>
        </Project>

        <Project>
          <Infos>
            <p>Professor José Antônio</p>
            <p>25/11/2019</p>
          </Infos>
          <Title>Realidade Aumentada - Química</Title>
          <p>
            Desejo utilizar realidade aumentada nas aulas de química, por que o
            bagulho aqui é muito loko irmão, chama nois. CHAAAAMAAA. PAAAW.
            PIZZA
          </p>
          <Tags>
            <p>Python</p>
            <p>Javascript</p>
          </Tags>
        </Project>

        <Project>
          <Infos>
            <p>Professor José Antônio</p>
            <p>25/11/2019</p>
          </Infos>
          <Title>Realidade Aumentada - Química</Title>
          <p>
            Desejo utilizar realidade aumentada nas aulas de química, por que o
            bagulho aqui é muito loko irmão, chama nois. CHAAAAMAAA. PAAAW.
            PIZZA
          </p>

          <Tags>
            <p>Python</p>
            <p>Javascript</p>
          </Tags>
        </Project>
      </ProjectList>
    </Container>
  );
}

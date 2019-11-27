import React from 'react';

import {
  Container,
  ProjectList,
  Project,
  Title,
  Tags,
  Infos,
  Courses,
} from './styles';

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

          <Courses>
            <h1>Cursos relacionados</h1>
            <p>
              Curso de Javascript:{' '}
              <a
                href="https://rocketseat.com.br/starter/curso-gratuito-javascript"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rocketseat Js Starter
              </a>
            </p>
            <p>
              Curso de Python:{' '}
              <a
                href="https://www.youtube.com/watch?v=lJjR906426o&list=PLfCKf0-awunOu2WyLe2pSD2fXUo795xRe"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ignorância Zero
              </a>
            </p>
            <p>
              Lives de Python:{' '}
              <a
                href="https://www.youtube.com/watch?v=HuZ2Keoc9Hs&list=PLOQgLBuj2-3K1hb7XgkGPb4S9YNIeHsPk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Eduardo Mendes
              </a>
            </p>
          </Courses>
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
          <Courses>
            <h1>Cursos relacionados</h1>
            <p>
              Curso de Javascript:{' '}
              <a
                href="https://rocketseat.com.br/starter/curso-gratuito-javascript"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rocketseat Js Starter
              </a>
            </p>
            <p>
              Curso de Python:{' '}
              <a
                href="https://www.youtube.com/watch?v=lJjR906426o&list=PLfCKf0-awunOu2WyLe2pSD2fXUo795xRe"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ignorância Zero
              </a>
            </p>
            <p>
              Lives de Python:{' '}
              <a
                href="https://www.youtube.com/watch?v=HuZ2Keoc9Hs&list=PLOQgLBuj2-3K1hb7XgkGPb4S9YNIeHsPk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Eduardo Mendes
              </a>
            </p>
          </Courses>
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
          <Courses>
            <h1>Cursos relacionados</h1>
            <p>
              Curso de Javascript:{' '}
              <a
                href="https://rocketseat.com.br/starter/curso-gratuito-javascript"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rocketseat Js Starter
              </a>
            </p>
            <p>
              Curso de Python:{' '}
              <a
                href="https://www.youtube.com/watch?v=lJjR906426o&list=PLfCKf0-awunOu2WyLe2pSD2fXUo795xRe"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ignorância Zero
              </a>
            </p>
            <p>
              Lives de Python:{' '}
              <a
                href="https://www.youtube.com/watch?v=HuZ2Keoc9Hs&list=PLOQgLBuj2-3K1hb7XgkGPb4S9YNIeHsPk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Eduardo Mendes
              </a>
            </p>
          </Courses>
        </Project>
      </ProjectList>
    </Container>
  );
}

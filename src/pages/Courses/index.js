import React from 'react';
import { Link } from 'react-router-dom';

import { Container, CourseList, Course } from './styles';

export default function Courses() {
  return (
    <Container>
      <center>
        <h1>Cursos</h1>
      </center>

      <CourseList>
        <Course>
          <Link to="/">
            <img
              src="https://images.tcdn.com.br/img/img_prod/696024/bordado_patches_cobra_fumando_284_1_20190423153837.jpg"
              alt=""
            />
            <div>
              <h1>Curso massa de python</h1>
              <p>
                Essa é uma descrição muita massa desse curso que eu
                particulamente já considero pakas
              </p>
            </div>
          </Link>
        </Course>

        <Course>
          <Link to="/">
            <img
              src="https://images.tcdn.com.br/img/img_prod/696024/bordado_patches_cobra_fumando_284_1_20190423153837.jpg"
              alt=""
            />
            <div>
              <h1>Curso massa de python</h1>
              <p>
                Essa é uma descrição muita massa desse curso que eu
                particulamente já considero pakas
              </p>
            </div>
          </Link>
        </Course>

        <Course>
          <Link to="/">
            <img
              src="https://images.tcdn.com.br/img/img_prod/696024/bordado_patches_cobra_fumando_284_1_20190423153837.jpg"
              alt=""
            />
            <div>
              <h1>Curso massa de python</h1>
              <p>
                Essa é uma descrição muita massa desse curso que eu
                particulamente já considero pakas
              </p>
            </div>
          </Link>
        </Course>

        <Course>
          <Link to="/">
            <img
              src="https://images.tcdn.com.br/img/img_prod/696024/bordado_patches_cobra_fumando_284_1_20190423153837.jpg"
              alt=""
            />
            <div>
              <h1>Curso massa de python</h1>
              <p>
                Essa é uma descrição muita massa desse curso que eu
                particulamente já considero pakas
              </p>
            </div>
          </Link>
        </Course>
      </CourseList>
      {/* <CourseList>
        <Course>
          <img src="" alt="" />
          <Title>Python para iniciantes</Title>
        </Course>
      </CourseList> */}
    </Container>
  );
}

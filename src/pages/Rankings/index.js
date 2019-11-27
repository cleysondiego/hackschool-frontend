import React, { useState } from 'react';
import { Container, RankingList } from './styles';
import { StudentsList, Student } from '../Room/styles';

export default function Rankings() {
  const [showStudentRanking, setShowStudentRanking] = useState(false);

  return (
    <Container>
      <center>
        <button onClick={() => setShowStudentRanking(false)}>Salas</button>
        <button onClick={() => setShowStudentRanking(true)}>Alunos</button>
      </center>

      <RankingList>
        {showStudentRanking ? (
          <StudentsList>
            <Student>
              <p># 01</p>
              Cleysu
              <p>500</p>
            </Student>

            <Student>
              <p># 02</p>
              Polettinho
              <p>400</p>
            </Student>

            <Student>
              <p># 03</p>
              Sandersson
              <p>300</p>
            </Student>

            <Student>
              <p># 04</p>
              Davi
              <p>200</p>
            </Student>

            <Student>
              <p># 05</p>
              Raffa Moreira Mano
              <p>190</p>
            </Student>
          </StudentsList>
        ) : (
          <StudentsList>
            <Student>
              <p># 01</p>
              Sala 1<p>1000</p>
            </Student>

            <Student>
              <p># 02</p>
              Sala 2<p>500</p>
            </Student>

            <Student>
              <p># 03</p>
              Sala 3<p>100</p>
            </Student>
          </StudentsList>
        )}
      </RankingList>
    </Container>
  );
}

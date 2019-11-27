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
              <p>01</p>
              Cleysu
              <p>3000</p>
            </Student>

            <Student>
              <p>01</p>
              Cleysu
              <p>3000</p>
            </Student>

            <Student>
              <p>01</p>
              Cleysu
              <p>3000</p>
            </Student>

            <Student>
              <p>01</p>
              Cleysu
              <p>3000</p>
            </Student>

            <Student>
              <p>01</p>
              Cleysu
              <p>3000</p>
            </Student>
          </StudentsList>
        ) : (
          <StudentsList>
            <Student>
              <p>01</p>
              Sala 1<p>10000</p>
            </Student>

            <Student>
              <p>02</p>
              Sala 2<p>1000</p>
            </Student>

            <Student>
              <p>03</p>
              Sala 3<p>100</p>
            </Student>
          </StudentsList>
        )}
      </RankingList>
    </Container>
  );
}

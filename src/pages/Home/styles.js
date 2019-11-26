import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

export const CourseCard = styled.div`
  width: 300px;
  height: 100px;
  display: flex;

  & > img {
    height: 100px;
    width: 100px;
    margin-right: 5px;
  }
`;

export const CourseCardTitle = styled.h1`
  font-size: 1.4em;
  margin-bottom: 10px;
`;

export const CourseCardDescription = styled.p`
  font-size: 0.875em;
`;

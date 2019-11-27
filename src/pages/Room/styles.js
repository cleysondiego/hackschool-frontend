import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
`;

export const StudentsList = styled.ul`
  display: grid;
  grid-row-gap: 20px;
  margin-top: 20px;
  background: #fff;
  border-radius: 2px;
`;

export const Student = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`;

export const Title = styled.h1`
  margin: 20px 0;
  color: #ff0000;
`;

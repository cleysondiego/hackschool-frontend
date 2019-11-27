import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
`;

export const StudentsList = styled.ul`
  display: grid;
  margin-top: 20px;
  background: #1c294a;
  border-radius: 2px;
  color: #fff;
`;

export const Student = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;

  padding: 30px 0;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  font-weight: bold;
`;

export const Title = styled.h1`
  margin: 20px 0;
  color: #ff0000;
`;

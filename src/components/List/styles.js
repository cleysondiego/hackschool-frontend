import styled from 'styled-components';

export const Container = styled.div`
  & > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  margin: 20px 0;
`;

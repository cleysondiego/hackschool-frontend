import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  width: 100%;
  height: 70px;
  background-color: #000;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;

  & > a {
    /* height: 70px; */
    font-size: 1.2em;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 100%;
    color: #fff;
  }

  & > a:hover {
    background: #283246;
  }
`;

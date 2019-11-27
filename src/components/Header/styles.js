import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  width: 100%;
  height: 70px;
  background: #08192d;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;

  & > h1 {
    font-size: 30px;
    color: #fff;

    & > span {
      color: #ff0000;
    }
  }

  & > div {
    display: flex;
    width: 60%;
    height: 100%;
  }

  & > div > a {
    display: flex;
    font-size: 1.2em;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 100%;
    color: #fff;
  }

  & > div > a:hover {
    color: #ce4e4e;
  }
`;

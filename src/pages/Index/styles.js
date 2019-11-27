import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;

  & > center {
    margin: 20px;

    & > a {
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      margin: 20px;
    }

    & > a:first-of-type {
      border-right: 2px solid #fff;
      padding-right: 20px;
      margin-right: 0;
    }

    & > a:hover {
      color: #ce4e4e;
    }
  }
`;

export const RoomList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

export const Room = styled.li`
  width: 200px;
  height: 100px;
  background: #000;
  color: yellow;
  border: 1px solid yellow;
  margin: 10px 0;

  cursor: pointer;
  justify-self: center;

  & > a {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #fff;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;

  & > center > h1 {
    color: #ff0000;
    margin: 20px 0;
  }
`;

export const EventsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Event = styled.li`
  justify-self: center;
  width: 40%;

  & > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
    color: #fff;
    height: 300px;
    border: 1px solid #ccc;
    background: #1c294a;
    border-radius: 6px;
    padding: 10px;

    & > img {
      height: 60px;
      width: 60px;
    }

    & > div {
      text-align: center;
      justify-content: space-between;
      padding: 10px;
      height: 70%;

      * {
        margin-top: 10px;
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 30px;
`;

export const EventDate = styled.p`
  font-size: 12px;
  margin-top: 10px;
`;

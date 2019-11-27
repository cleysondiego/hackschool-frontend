import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

export const CourseCard = styled.div`
  width: 300px;
  height: 120px;
  display: flex;
  padding: 10px;
  background: #0d1b38;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);

  & > img {
    height: 100px;
    width: 100px;
    margin-right: 5px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const CourseCardTitle = styled.h1`
  font-size: 1.4em;
  margin-bottom: 10px;
  color: #d89a36;
`;

export const CourseCardDescription = styled.p`
  font-size: 0.875em;
  color: #fff;
`;

export const EventCard = styled(CourseCard)`
  width: 48%;
`;

export const EventCardTitle = styled(CourseCardTitle)``;

export const EventCardDescription = styled(CourseCardDescription)``;

export const Content = styled.div`
  height: 85vh;
  display: flex;
  align-items: center;
  /* justify-content: center; */

  & > img {
    height: 70%;
    margin-left: auto;
  }

  & > div {
    width: 50%;
    color: #fff;
  }

  & > div > h1 {
    font-size: 70px;
    margin-bottom: 20px;
  }

  & > div > h1 > span {
    color: #ff0000;
  }

  & > div > p {
    line-height: 1.8;
    font-size: 20px;
  }

  & > div > div {
    margin-top: 30px;
  }

  & > div > div > button {
    margin-right: 20px;
  }
`;

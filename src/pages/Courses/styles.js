import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;

  & > center > h1 {
    margin: 20px 0;
    color: #ff0000;
  }
`;

export const CourseList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Course = styled.li`
  & > a {
    display: flex;
    align-items: center;
    margin: 10px 0;
    color: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 16px;
    background: #1c294a;

    & > img {
      margin-right: 10px;
      height: 100px;
      border-radius: 50%;
    }
  }
`;

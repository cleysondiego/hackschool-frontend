import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;

  & > center {
    margin: 20px 0;

    & > h1 {
      color: #ff0000;
    }
  }

  & > button {
    width: 100%;
    color: #fff;
    border: 0;
    background: none;
    background-color: #1c294a;
    padding: 15px;
    border-radius: 16px;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const ProjectList = styled.ul``;

export const Project = styled.li`
  border: 1px solid #ccc;
  border-radius: 16px;
  padding: 20px;
  margin: 20px 0;
  cursor: pointer;
  color: #fff;

  & > p {
    line-height: 2;
    font-size: 18px;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const Infos = styled.div`
  display: flex;
  color: #ccc;
  margin-bottom: 20px;

  & > p {
    margin-right: 20px;
  }
`;

export const Tags = styled.div`
  display: flex;
  color: #ccc;
  margin-top: 10px;

  & > p {
    margin-right: 10px;
  }
`;

export const Courses = styled.div`
  margin-top: 20px;

  & > h1 {
    font-size: 14px;
    margin-bottom: 5px;
  }

  & > p {
    color: #fff;
    margin-bottom: 5px;

    & > a {
      color: #ff0000;

      &:hover {
        color: #ce4e4e;
      }
    }
  }
`;

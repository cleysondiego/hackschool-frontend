import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;

  & > center > h1 {
    color: #ff0000;
    margin: 20px 0;
  }

  & > div {
    display: flex;
    color: #fff;
    height: 30vh;
    overflow: hidden;
    margin-bottom: 30px;

    & > div {
      & > h2 {
        margin-bottom: 20px;
      }

      & > p {
        /* flex: 1; */
        line-height: 1.5;
      }
    }

    & > img {
      height: 100%;
      margin: 0 10px;
    }
  }
`;

export const Title = styled.h1``;

import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;

  & > center {
    margin: 20px;

    & > button {
      margin: 0;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      background: none;
      border: none;
    }

    & > button:first-of-type {
      border-right: 2px solid #fff;
      padding-right: 20px;
      margin-right: 0;
    }

    & > button:last-of-type {
      padding-left: 20px;
    }

    & > button:hover {
      color: #ce4e4e;
    }
  }
`;

export const RankingList = styled.div`

`;

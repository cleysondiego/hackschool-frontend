import styled from 'styled-components';

import { StyledForm } from '../Login/styles';

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  max-width: 960px;
  height: 100%;
  display: flex;
  margin: 0 auto;
  margin-top: -70px;
`;

export const RoomStyledForm = styled(StyledForm)`
  /* height: 50vh;
  background: #fff;
  border: 1px solid yellow;
  display: flex;
  flex-direction: column; */
  width: 30%;
  justify-content: space-between;
  & > div:last-of-type {
    margin-top: 0;
  }

  /* & > div {
    height: 20px;
  } */
`;

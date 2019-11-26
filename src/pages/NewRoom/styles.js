import styled from 'styled-components';
import { Form } from '@rocketseat/unform';

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  max-width: 960px;
  height: 100%;
  display: flex;
  margin: 0 auto;
`;

export const StyledForm = styled(Form)`
  height: 50vh;
  transform: translate(0, -20%);
  border: 1px solid yellow;
  display: flex;
  width: 50vw;
  flex-direction: column;
`;

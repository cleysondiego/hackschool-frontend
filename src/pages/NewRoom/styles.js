import styled from 'styled-components';
import { Form } from '@rocketseat/unform';

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  max-width: 960px;
  height: 100%;
  display: flex;
  margin: 0 auto;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 0.938813025210084) 12%,
    rgba(34, 29, 35, 1) 100%
  );
`;

export const StyledForm = styled(Form)`
  height: 50vh;
  transform: translate(0, -20%);
  border: 1px solid yellow;
  display: flex;
  width: 50vw;
  flex-direction: column;
`;

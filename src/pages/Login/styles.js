import styled from 'styled-components';
import { Form, Input } from '@rocketseat/unform';

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -70px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  min-height: 50%;
  width: 25%;
  background: #fff;
  padding: 15px;
  border-top: 10px solid #ff0000;

  & > div:last-of-type {
    height: 100%;
    margin-top: 20px;

    & > center {
      margin-top: 20px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  text-align: center;
`;

export const StyledInput = styled(Input)`
  height: 50px;
  width: 100%;
  background: #eaeaea;
  text-align: center;
  border: 0;
  margin: 10px 0;

  &:first-of-type {
    margin-top: 10px;
  }
`;

export const Button = styled.button`
  height: 50px;
  width: 100%;
`;

import styled from 'styled-components';

export const StyledButton = styled.button`
  border-radius: 50px;
  background: ${props => (props.kind === 'primary' ? '#ff0000' : '#221d23')};
  border: 0;
  width: 200px;
  font-size: 14px;
  font-weight: 500;
  min-width: 195px;
  padding: 23px 20px;
  border-radius: 50px;
  text-transform: uppercase;
  color: #fff;
  line-height: normal;
  cursor: pointer;
  text-align: center;
`;
//<a href="https://br.freepik.com/fotos-vetores-gratis/pessoas">Pessoas vetor criado por freepik - br.freepik.com</a>

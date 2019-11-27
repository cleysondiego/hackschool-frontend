import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  *:focus {
    outline:0;
  }

  html,body,#root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    /* background: linear-gradient(45deg, rgba(34,29,35,1) 0%, rgba(65,65,65,1) 100%); */
    background: #1e0138;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none
  }

  ul{
    list-style:none
  }

  button {
    cursor: pointer
  }
`;

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Nunito',
  }

   html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }
    @media (max-width:720px){
      font-size: 87.5%;
    }
  }

`
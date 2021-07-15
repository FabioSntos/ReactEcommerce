import styled from "styled-components";

import testeBackground from "../../assets/backgroundSlid.png";

export const Container = styled.div`
  width: 100%;
  height: 50vh;
  overflow: hidden;

  .test {
    height: 30vh;
    background-image: url(${testeBackground});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-color: blue;
  }
`;

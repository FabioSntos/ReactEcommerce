import styled from "styled-components";

import { motion } from "framer-motion";

export const Container = styled.div`
  overflow-x: hidden;
  height: 100%;

  .teste2 {
    background-color: #fca;
  }
`;

export const Li = styled(motion.li)`
  position: absolute;
  background-color: #000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  .liContent {
    max-width: 1120px;
    margin: 0 auto;
  }
  h3 {
    color: #fff;
    font-family: "Nunito";
    font-size: 30px;

    strong {
      font-weight: 900;
      font-size: 45px;
    }
  }
`;

export const SlideContainer = styled.ul`
  position: relative;
  width: 100%;
  height: 400px;
`;

export const ButtonContainer = styled.div`
  z-index: 3;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  button {
    width: 20px;
    height: 20px;
    border-radius: 20px;
    border: none;
    margin-right: 5px;
    margin-bottom: 5px;
    background-color: #bdbdbd;

    &.active {
      background-color: #f8475f;
    }
  }
  @media (min-width: 768px) {
  }
`;

import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.section`
  margin-top: 2rem;
  width: 80%;
  margin: 0 auto;

  > strong {
    font-size: 1.5rem;
    font-weight: normal;
    color: #f5f5f5;
    opacity: 0.9;
    border-bottom: 1px solid rgba(100, 100, 100, 0.6);
  }
`;

export const BoxWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
`;

export const BoxSingle = styled.div`
  width: 95%;
  max-width: 300px;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 1.5rem;

  div + & {
    margin-left: 1rem;
  }

  div {
    p {
      margin-top: 1rem;
      color: #f5f5f5;
      opacity: 0.8;
      font-size: 0.9rem;
    }

    h4 {
      margin: 0.5rem 0;
      margin-top: 1rem;
      height: 1.5px;
      width: 40%;
      background-color: rgba(100, 100, 100, 0.5);
    }
  }
`;

export const Img = styled.div`
  width: 100%;
  position: relative;
  border-radius: 0.5rem;
  border: 1px solid white;

  img {
    display: block;
    width: 100%;
    max-height: 120px;
    border-radius: 0.5rem;
  }

  span {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #111;
    color: #f5f5f5;
    padding: 0.3rem;
    border-top-left-radius: 0.4rem;
    border-bottom-right-radius: 0.6rem;
  }
`;

export const RightArrowComponent = styled.div`
  display: none;
`;
export const LeftArrowComponent = styled.div`
  display: none;
`;

export const LeftArrow = styled.div`
  position: absolute;
  z-index: 2;
  left: -3.4rem;
  top: 30%;
  transform: translateY(-30%);
  background-color: rgba(0, 0, 0, 0.2);
  border: 2px solid #c27c2c;
  padding: 0.3rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s ease;

  :hover {
    background-color: ${shade(-0.5, "rgba(0,0,0,0.9)")};
  }

  @media (max-width: 550px) {
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const RightArrow = styled.div`
  position: absolute;
  z-index: 10;
  right: -3.4rem;
  top: 30%;
  transform: translateY(-30%);
  background-color: rgba(0, 0, 0, 0.2);
  border: 2px solid #c27c2c;
  padding: 0.3rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s ease;

  :hover {
    background-color: ${shade(-0.5, "rgba(0,0,0,0.9)")};
  }

  @media (max-width: 550px) {
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

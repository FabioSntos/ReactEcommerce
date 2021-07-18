import styled from "styled-components";

export const Container = styled.main`
  height: 500px;
  width: 80%;
  margin: 0 auto;
  font-family: "Nunito";
  font-size: 20px;
  font-weight: 900;

  h3::after {
    content: "";
    display: block;
    width: 65px;
    height: 4px;
    border-radius: 5px;
    background-color: #c0c0c0;
  }

  .productWrapper {
    display: flex;
    justify-content: space-between;
  }
`;

export const ProductContainer = styled.div`
  max-width: 216px;

  height: 350px;
  text-align: center;
  font-family: "Nunito";
  p {
    font-size: 12px;
    color: #7a7a7a;
  }

  .strong {
    font-size: 18px;
    padding-top: 10px;
  }

  .productInfo {
    display: flex;
    flex-direction: column;

    align-items: center;
    background-color: #e6e8ea;
  }

  button {
    background-color: #000;
    border: none;
    color: #fff;
    font-size: 12px;
    border-radius: 5px;
    width: 120px;
    height: 32px;
    font-family: "Nunito";
    margin-top: 10px;
    cursor: pointer;
  }
`;

import styled from "styled-components";

export const Container = styled.header`
  max-width: 1120px;
  margin: 0 auto;

  padding: 3rem 1rem 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: "Nunito";
`;

export const Form = styled.div`
  width: 50%;
`;

export const ContentForm = styled.form`
  display: flex;
  max-width: 700px;

  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid black;

  input {
    outline: none;
    border: none;
    width: 100%;
  }

  button {
    background: none;
    border: none;
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    padding-right: 1rem;
  }
  .cart {
    display: flex;
  }
  .cart strong {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 20px;
    width: 20px;
    border-radius: 20px;
    color: #fff;
    background: #f8475f;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  background: #f2f2f2;
  height: 146px;
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    font-family: "Nunito";
    text-align: center;
    font-size: 22px;
    color: #333;
    padding-bottom: 16px;
  }
  @media screen and (max-width: 750px) {
    flex-direction: column;
    height: 276px;
  }
  p {
    color: #d7182a;
    text-align: left;
    padding-top: 1rem;
    font-size: 12px;
  }
  .error {
    border: 1px solid #d7182a;
  }
  form {
    font-family: "Nunito";
    text-align: center;
    display: flex;

    input {
      width: 280px;
      display: inline-block;

      height: 48px;
      border-radius: 5px;
      border: none;
      margin-right: 10px;
      padding-left: 10px;
      outline: none;
      border: 1px solid #bdbdbd;
      &::placeholder {
        color: #585858;
        font-family: "Nunito";
        font-size: 12px;
      }
    }
    button[type="submit"] {
      color: #fff;
      background-color: #000;
      border: none;
      width: 140px;
      height: 48px;
      border-radius: 5px;
      cursor: pointer;
      transition: filter 0.3s;
      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;

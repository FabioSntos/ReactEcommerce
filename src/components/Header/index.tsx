import React from "react";
import { ContentForm, Container, Form, ContentHeader } from "./styles";

import { useProduct } from "../../context/ProductContext";

//assets
import logo from "../../assets/logo.svg";
import account from "../../assets/account.svg";
import Cart from "../../assets/shopping-cart.svg";
import search from "../../assets/search.svg";

export const Header = () => {
  const { productAmount } = useProduct();
  const cartSize = productAmount;

  return (
    <Container>
      <img src={logo} alt="logo" />
      <Form>
        <ContentForm>
          <input
            className="teste"
            type="text"
            placeholder="O que está procurando?"
          />
          <button>
            {" "}
            <img src={search} alt="" />
          </button>
        </ContentForm>
      </Form>
      <ContentHeader>
        <img src={account} alt="minha conta" />
        <div className="cart">
          <img src={Cart} alt="" />
          <strong>{cartSize}</strong>
        </div>
      </ContentHeader>
    </Container>
  );
};

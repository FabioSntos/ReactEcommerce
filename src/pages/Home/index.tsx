import { Carousel } from "../../components/Carrousel";
import { Header } from "../../components/Header";
import { Newsletter } from "../../components/Newsletter";
import { Product } from "../../components/Product";
import NextClasses from "../../components/test";

import { ProductProvider } from "../../context/ProductContext";

export const Home = () => {
  return (
    <ProductProvider>
      <Header />
      <Carousel />
      <Product />
      <Newsletter />
    </ProductProvider>
  );
};

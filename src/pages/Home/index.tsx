import { Carousel } from "../../components/Carrousel";
import { Header } from "../../components/Header";
import { Newsletter } from "../../components/Newsletter";
import { Product } from "../../components/Product";
export const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Product />
      <Newsletter />
    </>
  );
};

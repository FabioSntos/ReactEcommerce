import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container, ProductContainer } from "./styles";

import { useProduct } from "../../context/ProductContext";
import Evaluation from "../Evaluation";

interface IProduct {
  productId: number;
  imageUrl: string;
  price: number;
  productName: string;
  category: string;
  stars: number;
}

export const Product = () => {
  const { increaseProductAmount } = useProduct();

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get("products").then((res) => setProducts(res.data));
  }, []);

  return (
    <Container>
      <h3>Mais Vendidos</h3>
      <div className="productWrapper">
        {products.map((product) => {
          return (
            <ProductContainer key={product.productId}>
              <img src={product.imageUrl} alt={product.productName} />
              <div className="productInfo">
                <p>{product.productName}</p>
                <Evaluation evaluation={product.stars} />
                <div className="strong"> por R$ {product.price}</div>
                <button onClick={increaseProductAmount}>COMPRAR</button>
              </div>
            </ProductContainer>
          );
        })}
      </div>
    </Container>
  );
};

import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container, ProductContainer } from "./styles";

interface IProduct {
  productId: number;
  imageUrl: string;
  price: number;
  productName: string;
  category: string;
  stars: number;
}

export const Product = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    api.get("products").then((res) => setProducts(res.data));
  }, []);
  console.log(products);

  return (
    <Container>
      {products.map((product) => {
        return (
          <ProductContainer>
            <img src={product.imageUrl} alt={product.productName} />
            <div className="productInfo">
              <p>{product.productName}</p>
              <span>{product.stars}</span>
              <div className="strong"> por R$ {product.price}</div>
              <button>COMPRAR</button>
            </div>
          </ProductContainer>
        );
      })}
    </Container>
  );
};

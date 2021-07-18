import cookies from "js-cookie";

import {
  createContext,
  useContext,
  useState,
  SetStateAction,
  Dispatch,
} from "react";

interface IProductContextType {
  productAmount: number;
  setProductAmount: Dispatch<SetStateAction<number>>;
  increaseProductAmount: () => void;
}

const ProductContext = createContext<IProductContextType>(
  {} as IProductContextType
);

export const ProductProvider: React.FC = ({ children }) => {
  const [productAmount, setProductAmount] = useState(() => {
    const productAmountCookies = cookies.get("@coreBiz:ProductAmount");
    if (!productAmountCookies) {
      return 0;
    }
    return JSON.parse(productAmountCookies);
  });
  function increaseProductAmount() {
    setProductAmount(productAmount + 1);
    cookies.set("@coreBiz:ProductAmount", JSON.stringify(productAmount + 1));
  }

  return (
    <ProductContext.Provider
      value={{ productAmount, setProductAmount, increaseProductAmount }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export function useProduct() {
  const context = useContext(ProductContext);

  return context;
}

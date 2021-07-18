import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./styles/GlobalStyles";

import { Routes } from "./routes";
import { ProductProvider } from "./context/ProductContext";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ProductProvider>
      <Routes />
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

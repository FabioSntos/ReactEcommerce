import React from "react";
import { api } from "../../services/api";

export const Product = () => {
  api.get("products");
  return (
    <div>
      <h1>ola</h1>
    </div>
  );
};

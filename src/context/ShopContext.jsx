/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const shopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const currency = "AED";
  const deliveryFee = 10;

  const productData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const productList = await res.json();
    setProducts(productList);
  };

  useEffect(() => {
    productData();
  }, []);

  const value = {
    products,
    currency,
    deliveryFee,
  };

  return <shopContext.Provider value={value}>{children}</shopContext.Provider>;
};

export default ShopContextProvider;

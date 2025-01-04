/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const shopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const currency = "AED";
  const deliveryFee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

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
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return <shopContext.Provider value={value}>{children}</shopContext.Provider>;
};

export default ShopContextProvider;

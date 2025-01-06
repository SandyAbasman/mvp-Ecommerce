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
  const [cartItems, setCartItems] = useState({});

  const addToCart = async (itemId) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = {};
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
  };
  const productData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const productList = await res.json();
    setProducts(productList);
  };

  useEffect(() => {
    productData();
  }, [products]);

  const getCartCount = () => {
    let totalCount = 0;

    for (const items in cartItems) {
      try {
        if (cartItems[items] > 0) {
          totalCount += cartItems[items];
        }
      } catch (error) {
        console.log(error);
      }
    }
    return totalCount;
  };

  const value = {
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
  };

  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);

  return <shopContext.Provider value={value}>{children}</shopContext.Provider>;
};

export default ShopContextProvider;

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Product = () => {
  const { productId } = useParams();
  //
  const [productData, setProductData] = useState([]);

  const fetchProductData = async () => {
    const data = await fetch("https://fakestoreapi.com/products/" + productId);
    const res = await data.json();
    setProductData(res);
  };

  console.log(productData);

  useEffect(() => {
    fetchProductData();
  }, [productId]);
  return <div>Product</div>;
};

export default Product;

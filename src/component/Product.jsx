/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { shopContext } from "../context/ShopContext";

import RelatedProduct from "./RelatedProduct";
import { IoIosStar } from "react-icons/io";
import LoadingProduct from "./LoadingProduct";

const Product = () => {
  const { productId } = useParams();
  const { currency, addToCart } = useContext(shopContext);
  //
  const [productData, setProductData] = useState(false);

  const fetchProductData = async () => {
    const data = await fetch("https://fakestoreapi.com/products/" + productId);
    const res = await data.json();
    setProductData(res);
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  const colors = {
    orange: "#F2C265",
    grey: "a9a9a9",
  };

  const stars = Array(5).fill(0);

  //   productData === false ? (
  //     <SplashScreen/>
  //   )

  return productData === false ? (
    <LoadingProduct />
  ) : (
    <div>
      <div className="flex h-auto w-full flex-row items-start justify-start px-40">
        <div className="flex h-auto w-1/2 flex-row justify-center bg-[#ffff]/20">
          <img
            className="h-auto w-1/2"
            src={productData.image}
            alt={productData.title}
          />
        </div>

        <div className="flex h-full w-1/2 flex-col items-start justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-semi-bold text-2xl">{productData.title}</p>
            <div className="gap flex flex-row">
              <div className="flex flex-row gap-2 pb-4">
                {stars.map((_, index) => {
                  return (
                    <div key={index}>
                      <IoIosStar
                        size={24}
                        color={
                          productData.rating.rate > index
                            ? colors.orange
                            : colors.grey
                        }
                      />
                    </div>
                  );
                })}
                <p className="">({productData.rating.rate}stars) </p>
              </div>
            </div>
          </div>

          <div className="mb-20 flex flex-col gap-1">
            <p className="font-semi-bold text-3xl">
              {currency}
              {productData.price}
            </p>
            <p className="text-sm font-bold text-black/50">
              Availiability :
              <span className="text-sm font-bold text-blue-400">
                {productData.rating.count > 0 ? " in-Stock" : " out of stock"}
              </span>
            </p>
          </div>

          <div className="mb-20">
            <p className="text-md font-normal leading-8 text-black/50">
              {productData.description}
            </p>
          </div>

          <div className="h-auto w-full">
            <button
              onClick={() => addToCart(productData.id)}
              className="h-auto w-full bg-black p-4 text-white"
            >
              Add to cart{" "}
            </button>
          </div>
        </div>
      </div>

      {/* related products  */}

      <RelatedProduct category={productData.category} />
    </div>
  );
};

export default Product;

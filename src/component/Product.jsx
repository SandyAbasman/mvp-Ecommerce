/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { shopContext } from "../context/ShopContext";
import LoadingProduct from "./LoadingProduct";
import RelatedProduct from "./RelatedProduct";
import { IoIosStar } from "react-icons/io";

const Product = () => {
  const { productId } = useParams();
  const { currency } = useContext(shopContext);
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

  return productData === false ? (
    <LoadingProduct />
  ) : (
    <div>
      <div className=" w-full h-auto flex flex-row justify-start items-start">
        <div className="w-1/2 h-auto flex flex-row justify-center bg-[#ffff]/20">
          <img
            className="w-1/2 h-auto "
            src={productData.image}
            alt={productData.title}
          />
        </div>

        <div className="w-1/2 h-full flex flex-col justify-between items-start ">
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-semi-bold">{productData.title}</p>
            <div className="flex flex-row gap">
              <div className="flex flex-row gap-2 pb-4">
                {stars.map((_, index) => {
                  return (
                    <>
                      <IoIosStar
                        key={index}
                        size={24}
                        color={
                          productData.rating.rate > index
                            ? colors.orange
                            : colors.grey
                        }
                      />
                    </>
                  );
                })}
                <p className="">({productData.rating.rate}stars) </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1 mb-20">
            <p className="text-3xl font-semi-bold">
              {currency}
              {productData.price}
            </p>
            <p className="font-bold text-black/50 text-sm ">
              Availiability :
              <span className="text-blue-400 font-bold text-sm">
                {productData.rating.count > 0 ? " in-Stock" : " out of stock"}
              </span>
            </p>
          </div>

          <div className="mb-20">
            <p className="text-md font-normal text-black/50 leading-8">
              {productData.description}
            </p>
          </div>

          <div className="w-full h-auto">
            <button className="bg-black p-4 w-full h-auto text-white">
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

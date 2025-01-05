/* eslint-disable react/prop-types */
import { useContext } from "react";
import { shopContext } from "../context/ShopContext";
import { Link } from "react-router";
import { BsCart3 } from "react-icons/bs";

const ProductItem = ({ id, image, name, price, rating }) => {
  const { currency } = useContext(shopContext);
  return (
    <Link to={`/product/${id}`}>
      <div className=" flex flex-col  justify-start items-start gap-4">
        <div className="w-64 h-60 p-4 bg-[#F3F3F3] rounded-lg ">
          <img
            src={image}
            className="w-full mix-blend-multiply  h-full"
            alt={name}
          />
        </div>

        <div className="w-full  h-auto flex flex-row justify-between items-center gap-2 ">
          <div className=" w-1/2 h-auto flex flex-col gap-2 justify-start items-start">
            <p className="text-lg  font-thin  text-nowrap text-center">
              {name.split(" ").slice(0, 3).join(" ")}
            </p>
            <p className=" font-semibold text-lg  flex flex-row gap-2 items-center text-center ">
              {currency}
              {price}
              <span className="text-xs text-nowrap text-black/30">
                {rating.count - 10} - sold
              </span>
            </p>
            <p className=" text-black/50 text-md">Rating: {rating.rate}</p>
          </div>

          <div className="w-1/2 h-auto  flex flex-row justify-end ">
            <span className="w-8 h-8 rounded-full border-2 p-1 flex flex-row justify-center text-blue-500 border-blue-500">
              <BsCart3 />
            </span>
          </div>
        </div>

        <div className="w-full h-auto">
          <button className="w-full h-auto font-bold text-white text-lg rounded-md bg-blue-500 p-2">
            Buy now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;

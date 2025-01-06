/* eslint-disable react/prop-types */
import { useContext } from "react";
import { shopContext } from "../context/ShopContext";
import { Link } from "react-router";
import { BsCart3 } from "react-icons/bs";

const ProductItem = ({ id, image, name, price, rating }) => {
  const { currency, addToCart } = useContext(shopContext);

  return (
    <div className=" flex flex-col motion-preset-compress justify-start items-start gap-4">
      <Link to={`/product/${id}`}>
        <div className="w-64 h-60 p-4 hover:shadow-2xl hover:animate-pulse duration-75 bg-[#F3F3F3] rounded-lg ">
          <img
            src={image}
            className="w-full mix-blend-multiply   h-full"
            alt={name}
          />
        </div>
      </Link>

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
          <span
            onClick={() => addToCart(id)}
            className="w-8 h-8 cursor-pointer hover:bg-blue-500 rounded-full border-2 p-1 flex flex-row justify-center text-blue-500 border-blue-500 hover:text-white"
          >
            <BsCart3 />
          </span>
        </div>
      </div>

      <div className="w-full h-auto">
        <Link to={`/product/${id}`}>
          <button className="w-full h-auto font-bold hover:bg-white hover:border-blue-500  border-2 hover:text-blue-500 text-white text-lg rounded-md bg-blue-500 p-2">
            Buy now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;

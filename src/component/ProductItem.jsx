/* eslint-disable react/prop-types */
import { useContext } from "react";
import { shopContext } from "../context/ShopContext";
import { Link } from "react-router";
import { BsCart3 } from "react-icons/bs";

const ProductItem = ({ id, image, name, price, rating }) => {
  const { currency, addToCart } = useContext(shopContext);

  return (
    <div className="flex flex-col items-start justify-start gap-4">
      <Link to={`/product/${id}`}>
        <div className="h-60 w-64 rounded-xl bg-[#F3F3F3]/40 p-8 duration-200 hover:bg-[#F3F3F3]/10 hover:p-0">
          <img
            src={image}
            className="h-full w-full mix-blend-multiply"
            alt={name}
          />
        </div>
      </Link>

      <div className="flex h-auto w-full flex-row items-center justify-between gap-2">
        <div className="flex h-auto w-1/2 flex-col items-start justify-start gap-2">
          <p className="text-nowrap text-center text-lg font-thin">
            {name.split(" ").slice(0, 3).join(" ")}
          </p>
          <p className="flex flex-row items-center gap-2 text-center text-lg font-semibold">
            {currency}
            {price}
            <span className="text-nowrap text-xs text-black/30">
              {rating.count - 10} - sold
            </span>
          </p>
          <p className="text-md text-black/50">Rating: {rating.rate}</p>
        </div>

        <div className="flex h-auto w-1/2 flex-row justify-end">
          <span
            onClick={() => addToCart(id)}
            className="flex h-8 w-8 cursor-pointer flex-row justify-center rounded-full border-2 border-blue-500 p-1 text-blue-500 hover:bg-blue-500 hover:text-white"
          >
            <BsCart3 />
          </span>
        </div>
      </div>

      <div className="h-auto w-full">
        <Link to={`/product/${id}`}>
          <button className="h-auto w-full rounded-md border-2 bg-blue-500 p-2 text-lg font-bold text-white hover:border-blue-500 hover:bg-white hover:text-blue-500">
            Buy now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;

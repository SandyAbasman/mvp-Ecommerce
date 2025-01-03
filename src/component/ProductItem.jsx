/* eslint-disable react/prop-types */
import { useContext } from "react";
import { shopContext } from "../context/ShopContext";
import { Link } from "react-router";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(shopContext);
  return (
    <Link
      className="text-gray-700 cursor-pointer flex flex-col justify-start items-center"
      to={`/product/${id}`}
    >
      <div className="overflow-hidden">
        <img src={image} className="w-28 h-40" alt={name} />
      </div>
      <div className=" w-1/2 p-2 flex flex-col item-center">
        <p className="text-xs  font-semibold text-center">{name}</p>
        <p className=" font-semibold text-xs text-center text-green-600">
          {currency} {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;

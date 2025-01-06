/* eslint-disable react/prop-types */

// import { BsCartPlus } from "react-icons/bs";

const ProductList = ({ title, img, price }) => {
  return (
    <div className="relative flex w-full flex-col items-center p-2">
      <div>
        <img src={img} className="h-[14rem] w-[10rem]" alt={title} />
      </div>
      <div className="flex h-auto flex-row justify-center rounded-sm bg-gray-500/5 text-center">
        <div className="h-auto w-1/2">
          <h2 className="text-xs font-semibold text-black/80">{title}</h2>
          <p className="text-sm font-semibold text-[#23856D]">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

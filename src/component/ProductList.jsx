/* eslint-disable react/prop-types */

// import { BsCartPlus } from "react-icons/bs";

const ProductList = ({ title, img, price }) => {
  return (
    <div className=" w-full   relative flex flex-col p-2 items-center ">
      <div>
        <img src={img} className=" w-[10rem] h-[14rem]" alt={title} />
      </div>
      <div className=" h-auto bg-gray-500/5 text-center rounded-sm flex flex-row justify-center ">
        <div className="w-1/2 h-auto  ">
          <h2 className="text-xs font-semibold text-black/80">{title}</h2>
          <p className="text-[#23856D] text-sm font-semibold">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

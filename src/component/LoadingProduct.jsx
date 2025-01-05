import { useContext } from "react";
import { shopContext } from "../context/ShopContext";

const LoadingProduct = () => {
  const { products } = useContext(shopContext);
  return (
    <div className="w-fu(ll h-auto cursor-pointer flex flex-col justify-start items-center">
      {products.map((_, index) => (
        <div className=" bg-gray-600 w-40 h-40 p-30 " key={index}>
            
        </div>
      ))}
    </div>
  );
};

export default LoadingProduct;

import { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/ShopContext";
import { Title } from "./Title";
import ProductItem from "./ProductItem";
import LoadingProduct from "./LoadingProduct";

function BestCollection() {
  const { products } = useContext(shopContext);
  const [bestCollection, SetBestCollection] = useState([]);

  useEffect(() => {
    SetBestCollection(products.slice(0, 6));
  }, [products]);

  return bestCollection.length === 0 ? (
    <LoadingProduct />
  ) : (
    <div className="w-full h-auto flex  flex-col justify-start items-center px-20">
      <Title
        title1="Featured Products"
        title2="BESTSELLER PRODUCTS"
        description="Problems trying to resolve the conflict between"
      />
      {/* showing products */}
      <div className="">
        <div className="grid grid-cols-3 py-4 gap-2 justify-items-center ">
          {bestCollection.map((item) => (
            <ProductItem
              key={item.id}
              id={item.id}
              name={item.title}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestCollection;

import { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/ShopContext";
import { Title } from "./Title";
import ProductItem from "./ProductItem";
import LoadingProduct from "./LoadingProduct";

function BestCollection() {
  const { products } = useContext(shopContext);
  const [bestCollection, SetBestCollection] = useState([]);

  useEffect(() => {
    SetBestCollection(products.splice(0, 4));
  }, [products]);

  return (
    <div className="w-full h-auto flex  flex-col justify-start px-32 gap-6 ">
      <Title
        title1="Featured Products"
        title2="BESTSELLER PRODUCTS"
        description="Problems trying to resolve the conflict between"
      />

      {bestCollection.length === 0 ? (
        <LoadingProduct />
      ) : (
        <div className="w-full h-auto">
          <div className=" w-full  grid grid-cols-4 flex-wrap  gap-20 justify-items-stretch ">
            {bestCollection.map((item) => (
              <ProductItem
                key={item.id}
                id={item.id}
                name={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default BestCollection;

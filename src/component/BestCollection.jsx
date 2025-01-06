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
    <div className="flex h-auto w-full flex-col justify-start gap-6 px-32">
      <Title
        title1="Featured Products"
        title2="BESTSELLER PRODUCTS"
        description="Problems trying to resolve the conflict between"
      />

      {bestCollection.length === 0 ? (
        <LoadingProduct />
      ) : (
        <div className="h-auto w-full">
          <div className="grid w-full grid-cols-4 flex-wrap justify-items-stretch gap-20">
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

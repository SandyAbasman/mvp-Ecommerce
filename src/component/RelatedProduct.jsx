/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import { Title } from "./Title";
import LoadingProduct from "./LoadingProduct";

const RelatedProduct = ({ category }) => {
  const { products } = useContext(shopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.slice();

      productCopy = productCopy.filter((item) => category === item.category);

      setRelated(productCopy.slice(0, 4));
    }
  }, [products, category]);

  return (
    <div className="w-full h-auto">
      <Title
        title2={"RELATED PRODUCTS"}
        description={
          "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores alias, obcaecati ut qui, "
        }
      />
      {related.length === 0 ? (
        <LoadingProduct />
      ) : (
        <div className="w-full grid grid-cols-4 flex-wrap  gap-8 justify-items-center">
          {related.map((item, index) => (
            <div key={index}>
              <ProductItem
                id={item.id}
                name={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RelatedProduct;

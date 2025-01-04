/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import { shopContext } from "../context/ShopContext";
import { useState, useEffect } from "react";
import ProductItem from "../component/ProductItem";
// import LoadingProduct from "../component/LoadingProduct";

const AllProduct = () => {
  const { products, search, showSearch  } = useContext(shopContext);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productCopy = products.slice();

    if(showSearch && search){
        productCopy = productCopy.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    setFilterProduct(productCopy);
  };

  useEffect(() => {
    setFilterProduct(products);
  }, []);

  const sortProduct = () => {
    let filterProductCopy = filterProduct.slice();

    switch (sortType) {
      case "low-High":
        setFilterProduct(filterProductCopy.sort((a, b) => a.price - b.price));
        break;

      case "High-Low":
        setFilterProduct(filterProductCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category,search,showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-row sm:flex-row  gap-1 sm:gap-10 px-32 border-t">
      {/* Filter Options */}
      <div className="min-w-60">
        <p>Filters</p>
        <div className="border">
          <p>Categories</p>
          <div className="flex  flex-row justify-start items-center gap-1">
            <input
              type="checkbox"
              onChange={toggleCategory}
              value={"men's clothing"}
            />
            <p>Men</p>
          </div>
          <div className="flex  flex-row justify-start items-center gap-1">
            <input
              type="checkbox"
              onChange={toggleCategory}
              value={"women's clothing"}
            />
            <p>Women</p>
          </div>
          <div className="flex  flex-row justify-start items-center gap-1">
            <input
              type="checkbox"
              onChange={toggleCategory}
              value={"jewelery"}
            />
            <p>jewelery</p>
          </div>
          <div className="flex  flex-row justify-start items-center gap-1">
            <input
              type="checkbox"
              onChange={toggleCategory}
              value={"electronics"}
            />
            <p>Electronics</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 py-4 gap-2 justify-items-center ">
        {filterProduct.map((item, index) => {
          return (
            <ProductItem
              key={index}
              id={item.id}
              name={item.title}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>

      <div>
        <select
          onChange={(e) => setSortType(e.target.value)}
          className="border"
        >
          <option value="relevant"> Sort by: relevant</option>
          <option value="low-High"> Sort by: Low-High</option>
          <option value="High-Low"> Sort by: High-Low</option>
        </select>
      </div>
    </div>
  );
};

export default AllProduct;

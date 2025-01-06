/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import { shopContext } from "../context/ShopContext";
import { useState, useEffect } from "react";
import ProductItem from "../component/ProductItem";
// import LoadingProduct from "../component/LoadingProduct";

const AllProduct = () => {
  const { products, search, showSearch } = useContext(shopContext);
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

    if (showSearch && search) {
      productCopy = productCopy.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
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
  }, [category, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className=" w-full h-auto flex flex-col gap-1 sm:gap-10 px-32 border-t">
      {/* Filter Options */}
      <div className="flex flex-row justify-between items-center">
        <div className="min-w-60">
          <p>Filters</p>
          <div className="border flex gap-8 flex-row ">
            <p className="text-lg font-semibold">Categories</p>
            <div className="flex  flex-row justify-start items-center gap-1">
              <input
                type="checkbox"
                onChange={toggleCategory}
                className=" w-8 h-8"
                value={"men's clothing"}
              />
              <p className="text-lg font-semibold">Men</p>
            </div>
            <div className="flex  flex-row justify-start items-center gap-1">
              <input
                type="checkbox"
                onChange={toggleCategory}
                className=" w-8 h-8"
                value={"women's clothing"}
              />
              <p className="text-lg font-semibold">Women</p>
            </div>
            <div className="flex  flex-row justify-start items-center gap-1">
              <input
                type="checkbox"
                onChange={toggleCategory}
                className=" w-8 h-8"
                value={"jewelery"}
              />
              <p className="text-lg font-semibold">jewelery</p>
            </div>
            <div className="flex  flex-row justify-start items-center gap-1">
              <input
                type="checkbox"
                onChange={toggleCategory}
                className=" w-8 h-8"
                value={"electronics"}
              />
              <p className="text-lg font-semibold">Electronics</p>
            </div>
          </div>
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

      <div className="w-full  grid grid-cols-4 flex-wrap gap-4 justify-items-center  ">
        {filterProduct.map((item, index) => {
          return (
            <ProductItem
              key={index}
              id={item.id}
              name={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllProduct;

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
        item.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category),
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
    <div className="flex h-auto w-full flex-col gap-1 border-t px-32 py-20 sm:gap-10">
      {/* Filter Options */}
      <div className="flex flex-row items-center justify-between">
        <div className="min-w-60">
          <p>Filters</p>
          <div className="flex flex-row gap-8 border">
            <p className="text-lg font-semibold">Categories</p>
            <div className="flex flex-row items-center justify-start gap-1">
              <input
                type="checkbox"
                onChange={toggleCategory}
                className="h-8 w-8"
                value={"men's clothing"}
              />
              <p className="text-lg font-semibold">Men</p>
            </div>
            <div className="flex flex-row items-center justify-start gap-1">
              <input
                type="checkbox"
                onChange={toggleCategory}
                className="h-8 w-8"
                value={"women's clothing"}
              />
              <p className="text-lg font-semibold">Women</p>
            </div>
            <div className="flex flex-row items-center justify-start gap-1">
              <input
                type="checkbox"
                onChange={toggleCategory}
                className="h-8 w-8"
                value={"jewelery"}
              />
              <p className="text-lg font-semibold">jewelery</p>
            </div>
            <div className="flex flex-row items-center justify-start gap-1">
              <input
                type="checkbox"
                onChange={toggleCategory}
                className="h-8 w-8"
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

      <div className="grid w-full grid-cols-4 flex-wrap justify-items-center gap-4">
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

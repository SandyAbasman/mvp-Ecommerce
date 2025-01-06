import { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/ShopContext";
import { CiSearch } from "react-icons/ci";
import { useLocation } from "react-router";
const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(shopContext);

  const [visible, setVisible] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("allproduct")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="w-full border-b border-t bg-gray-50 text-center">
      <div className="item-center inline-flex w-1/2 justify-center px-5 py-3">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="search"
          className="w-1/2 flex-1 rounded-full border border-gray-400 bg-inherit px-2 py-2 text-sm outline-none"
        />
        <CiSearch className="h-6 w-8" />
        <p onClick={() => setShowSearch(false)}>X</p>
      </div>
    </div>
  ) : null;
};

export default SearchBar;

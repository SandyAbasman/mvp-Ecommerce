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
    <div className=" w-full border-t border-b bg-gray-50 text-center">
      <div className=" w-1/2 inline-flex  item-center justify-center  px-5 py-3 ">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="search"
          className="flex-1 w-1/2 outline-none border py-2 px-2 border-gray-400 rounded-full bg-inherit text-sm"
        />
        <CiSearch className="w-8 h-6" />
        <p onClick={() => setShowSearch(false)}>X</p>
      </div>
    </div>
  ) : null;
};

export default SearchBar;

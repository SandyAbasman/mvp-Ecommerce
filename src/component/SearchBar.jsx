import { useContext } from "react";
import { shopContext } from "../context/ShopContext";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(shopContext);
  return showSearch ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="search"
        />
      </div>
    </div>
  ) : null;
};

export default SearchBar;

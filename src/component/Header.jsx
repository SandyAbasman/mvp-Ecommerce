import { IoCartOutline } from "react-icons/io5";

import { FaRegUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

import { useContext } from "react";
import { shopContext } from "../context/ShopContext";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  const { setShowSearch, getCartCount } = useContext(shopContext);
  return (
    <header className="fixed top-0 z-30 flex h-auto w-full flex-row items-center justify-between bg-white px-32 py-4 shadow-md">
      <Link to={"/"} className="w-1/2">
        <h2 className="text-4xl font-thin text-black/50">LOGO</h2>
      </Link>

      <ul className="flex h-auto w-1/3 flex-row items-center justify-around gap-4 font-medium text-black/50">
        <NavLink to={"/"}>
          <li>Home</li>
        </NavLink>
        <NavLink to={"/allproduct"}>
          <li> All Products</li>
        </NavLink>
        <NavLink to={"/about"}>
          <li>About</li>
        </NavLink>
        <NavLink to={"/contact"}>
          <li>Contact</li>
        </NavLink>
      </ul>
      <div className="flex h-auto w-1/2 flex-row items-center justify-end gap-4 text-[#23A6F0]">
        <p className="font-semibold">
          <span>Login</span>/<span>Register</span>
        </p>
        <FiSearch
          onClick={() => setShowSearch(true)}
          className="h-6 w-6 font-extrabold"
        />
        <div className="group relative">
          <FaRegUser className="h-6 w-6 cursor-pointer font-extrabold" />
          <div className="dropdown-menu absolute right-0 hidden pt-4 group-hover:block">
            <div className="flex w-36 flex-col gap-2 rounded-md bg-slate-100 px-5 py-3 text-gray-500">
              <p className="cursor-pointer hover:text-[#23A6F0]">My profile</p>
              <p className="cursor-pointer hover:text-[#23A6F0]">Orders</p>
              <p className="cursor-pointer hover:text-[#23A6F0]"> Logout</p>
            </div>
          </div>
        </div>
        <Link to={"/cart"}>
          <div className="relative">
            <IoCartOutline className="h-8 w-8 font-extrabold" />
            <div className="text-bold absolute -right-3 top-2 flex h-6 w-6 flex-row items-center justify-center rounded-full bg-[#23A6F0]/70 text-center text-sm font-bold text-white">
              {getCartCount()}
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;

import { IoCartOutline } from "react-icons/io5";

import { FaRegUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

import { useContext } from "react";
import { shopContext } from "../context/ShopContext";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  const { setShowSearch, getCartCount } = useContext(shopContext);
  return (
    <header className="w-full h-auto flex flex-row justify-between bg-white items-center py-4 px-32">
      <Link to={"/"} className="w-1/2 ">
        <h2 className="text-4xl font-thin text-black/50">LOGO</h2>
      </Link>

      <ul className="w-1/3 h-auto font-medium text-black/50 flex flex-row justify-around items-center gap-4">
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
      <div className="w-1/2 h-auto flex text-[#23A6F0] flex-row justify-end items-center gap-4 ">
        <p className=" font-semibold">
          <span>Login</span>/<span>Register</span>
        </p>
        <FiSearch
          onClick={() => setShowSearch(true)}
          className="font-extrabold    w-6 h-6"
        />
        <div className="group relative">
          <FaRegUser className="cursor-pointer font-extrabold   w-6 h-6" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 rounded-md bg-slate-100 text-gray-500">
              <p className="cursor-pointer hover:text-[#23A6F0]">My profile</p>
              <p className="cursor-pointer hover:text-[#23A6F0]">Orders</p>
              <p className="cursor-pointer hover:text-[#23A6F0]"> Logout</p>
            </div>
          </div>
        </div>
        <Link to={"/cart"}>
          <div className="relative">
            <IoCartOutline className="font-extrabold  w-8 h-8" />
            <div className="bg-[#23A6F0]/70 w-6 h-6  rounded-full font-bold text-sm  text-center flex flex-row justify-center items-center absolute  text-bold -right-3 top-2  text-white">
              {getCartCount()}
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;

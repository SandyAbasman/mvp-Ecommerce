import { IoCartOutline } from "react-icons/io5";
import storeLogo from "../assets/storeLogo.png";
import { FaRegUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useContext } from "react";
import { shopContext } from "../context/ShopContext";

const Header = () => {
  const { setShowSearch } = useContext(shopContext);
  return (
    <header className="w-full h-auto flex flex-row justify-between bg-white items-center px-8">
      <Link to={"/"} className="w-1/2 ">
        <img src={storeLogo} className="w-20 h-20" alt="storeLogo" />
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
        <CiSearch
          onClick={()=>setShowSearch(true)}
          size={30}
          className="font-extrabold"
        />
        <div className="group relative">
          <FaRegUser className="cursor-pointer" size={30} />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 rounded-md bg-slate-100 text-gray-500">
              <p className="cursor-pointer hover:text-[#23A6F0]">My profile</p>
              <p className="cursor-pointer hover:text-[#23A6F0]">Orders</p>
              <p className="cursor-pointer hover:text-[#23A6F0]"> Logout</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <IoCartOutline size={30} />
          <p className="bg-[#23A6F0]/80 absolute rounded-full text-xs p-1  text-bold -right-2 -top-1  text-white">
            10
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;

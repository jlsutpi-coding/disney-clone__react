import React from "react";

import { Link, NavLink } from "react-router-dom";

import Logo from "../assets/images/icons/logo.png";

import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { FiBell } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";

const Header = () => {
  const menus = [
    { path: "/", text: "Home" },
    { path: "/discover", text: "Discover" },
    { path: "/movie", text: "Movie Release" },
    { path: "/tv", text: "Series Release" },
    { path: "/about", text: "About" },
  ];

  return (
    <div className=" px-[75px] py-[39px]  flex justify-between items-center">
      {/* Logo */}
      <div>
        <Link to={"/"} className=" cursor-pointer">
          <img src={Logo} className=" h-8  " alt="" />
        </Link>
      </div>

      {/* Menu bar */}
      <div className=" flex gap-8 items-center">
        {menus.map((item, index) => (
          <NavLink
            className={({ isActive }) =>
              "transition-all duration-300 leading-[100%] tracking-[0%]  text-[16px] " +
              (isActive
                ? "  font-extrabold "
                : "  hover:scale-110 hover:text-[#d2d7da]  font-normal")
            }
            to={item.path}
            key={index}
          >
            {item.text}
          </NavLink>
        ))}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-[23px]">
        <IoSearchOutline className="w-6 h-6 cursor-pointer hover:text-[#d2d7da]" />
        <FiBell className="w-6 h-6 cursor-pointer hover:text-[#d2d7da]" />
        <div className=" flex items-center gap-1">
          <HiOutlineUserCircle className="w-8 h-8 rounded-full cursor-pointer hover:text-[#d2d7da]" />
          <RiArrowDownSLine className="w-5 h-5 cursor-pointer hover:text-[#d2d7da]" />
        </div>
      </div>
    </div>
  );
};

export default Header;

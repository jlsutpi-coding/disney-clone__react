import React, { useEffect, useState } from "react";

import { Link, NavLink } from "react-router-dom";

import Logo from "../assets/images/icons/logo.png";

import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { FiBell } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";
import { HEADER_MENUS } from "../data/headerMenus";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`px-[75px] py-[30px]  flex justify-between items-center fixed top-0 left-0 w-full z-50 transition-all duration-300 
         ${
           isScrolled
             ? "bg-black shadow-md"
             : " from-black/70 to-transparent bg-linear-to-b"
         }`}
    >
      {/* Logo */}
      <div>
        <Link to={"/"} className=" cursor-pointer">
          <img src={Logo} className=" h-8  " alt="" />
        </Link>
      </div>

      {/* Menu bar */}
      <div className=" flex gap-8 items-center">
        {HEADER_MENUS.map((item, index) => (
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

import { useEffect, useState } from "react";

import { Link, NavLink } from "react-router-dom";

import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { FiBell } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import Logo from "../assets/images/icons/logo.png";
import { HEADER_MENUS } from "../data/headerMenus";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`xl:px-[75px] lg:px-[45px]  lg:py-[30px] md:px-[30px] px-2.5 py-[15px]  flex justify-between items-center fixed top-0 left-0 w-full z-50 transition-all duration-300 
         ${
           isScrolled
             ? "bg-[#0D0C0F] shadow-md"
             : " from-black/70 to-transparent bg-linear-to-b"
         }`}
    >
      {/* Logo */}
      <div>
        <Link to={"/"} className=" cursor-pointer">
          <img src={Logo} className=" h-6 sm:h-8  " alt="" />
        </Link>
      </div>

      {/* Menu bar */}
      <div className="  hidden lg:flex gap-8 items-center">
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

      {isOpen && (
        <div className=" lg:hidden  absolute top-full bg-black  items-center justify-center  left-0 w-full flex  flex-col">
          {HEADER_MENUS.map((item, index) => (
            <NavLink
              className={({ isActive }) =>
                "transition-all duration-300 border-b px-4 py-3  w-full  text-center  border-[#ffffff1a] leading-[100%] tracking-[0%]  text-[12px] " +
                (isActive
                  ? "  font-extrabold "
                  : "  hover:text-[#d2d7da]  font-normal")
              }
              to={item.path}
              key={index}
              onClick={() => setIsOpen(false)}
            >
              <span></span>
              {item.text}
            </NavLink>
          ))}
        </div>
      )}

      {/* Right Section */}
      <div className="flex items-center gap-2 lg:gap-[23px]">
        <IoSearchOutline className="w-4 h-4 md:w-6 md:h-6 cursor-pointer hover:text-[#d2d7da]" />
        <FiBell className="hidden lg:block lg:w-6 lg:h-6  cursor-pointer hover:text-[#d2d7da]" />
        <div className=" hidden lg:flex items-center gap-1">
          <HiOutlineUserCircle className="w-8 h-8 rounded-full cursor-pointer hover:text-[#d2d7da]" />
          <RiArrowDownSLine className="w-5 h-5 cursor-pointer hover:text-[#d2d7da]" />
        </div>
        {/* Hambuger Menu */}
        <div className="md:block lg:hidden   ">
          <HiOutlineMenuAlt3
            className="w-4 h-4 md:w-6 md:h-6 cursor-pointer hover:text-[#d2d7da]"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

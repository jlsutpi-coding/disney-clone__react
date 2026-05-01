import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

import { AiFillLike } from "react-icons/ai";
import { GoBookmarkFill } from "react-icons/go";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoLogOut, IoPersonCircleSharp } from "react-icons/io5";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const HeaderDropdown = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const headerDropdownLinks = [
    {
      id: 1,
      title: "Profile",
      link: "/profile",
      icon: <IoPersonCircleSharp className=" h-5 w-5 lg:w-[22px]" />,
    },
    {
      id: 2,
      title: "Watchlist",
      link: "/watchlist",
      icon: <GoBookmarkFill className=" h-5 w-5 lg:w-[22px]" />,
    },
    {
      id: 3,
      title: "Liked",
      link: "/liked",
      icon: <AiFillLike className=" h-5 w-5 lg:w-[22px]" />,
    },
  ];

  useEffect(() => {
    if (!openDropdown) return;
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    };

    const handleClickEsc = (e) => {
      if (e.key === "Escape") {
        setOpenDropdown(false);
      }
    };

    document.addEventListener("keydown", handleClickEsc);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleClickEsc);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openDropdown]);

  return (
    <div className=" relative" ref={dropdownRef}>
      <button
        onClick={() => {
          setOpenDropdown(!openDropdown);
        }}
        className="  flex items-center hover:text-[#d2d7da] gap-0.5 lg:gap-1 cursor-pointer"
      >
        <HiOutlineUserCircle className=" w-5 h-5 lg:w-8 lg:h-8" />

        <RiArrowDownSLine
          className={`w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-300 ${openDropdown ? "rotate-180" : ""} `}
        />
      </button>
      <div
        className={` absolute mt-3 origin-top-right bg-[#0d0c0f] rounded-lg w-56 right-0  border border-gray-800 shadow-xl z-50 transition-all duration-200  ${
          openDropdown
            ? "opacity-100 scale-100 visible pointer-events-auto"
            : "opacity-0 scale-95 invisible pointer-events-none"
        } `}
      >
        <ul className=" py-2">
          {headerDropdownLinks.map((item) => (
            <Link to={item.link} key={item.id}>
              <li
                onClick={() => {
                  setOpenDropdown(false);
                }}
                className="px-4 py-2 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <div className="  flex items-center gap-3">
                  {item.icon}
                  <span className=" font-semibold lg:font-bold">
                    {item.title}
                  </span>
                </div>
              </li>
            </Link>
          ))}
          <li className="border-t border-gray-800 mt-2 pt-2">
            <button
              onClick={() => {
                setOpenDropdown(false);
              }}
              className="w-full px-4 py-2 hover:bg-white/10 transition-colors flex items-center gap-3"
            >
              <IoLogOut className="h-5 w-5" />
              <span className="font-semibold lg:font-bold">Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderDropdown;

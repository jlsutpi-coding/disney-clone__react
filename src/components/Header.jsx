import Disney_Logo from "../assets/images/disney-plus-logo.webp";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCH LIST", icon: HiPlus },
    { name: "ORIGINALS", icon: HiStar },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
  ];
  return (
    <div className=" flex items-center  justify-between p-5">
      {/* Navbar left section */}
      <div className=" flex gap-8 items-center">
        {/* Disney Logo Home Logo */}
        <img
          src={Disney_Logo}
          className=" w-10 md:w-[100px] object-cover "
          alt=""
        />

        {/* Navbar for large device */}
        <div className=" hidden md:flex gap-8 items-center">
          {menu.map((item) => {
            return (
              <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
            );
          })}
        </div>

        {/* NavBar for small device */}
        <div className=" flex md:hidden  gap-5 items-center">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItem key={item.name} name={""} Icon={item.icon} />
              )
          )}

          {/* small size dots sections */}
          <div onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle && (
              <div className=" absolute  p-3 border bg-dark border-gray-700 px-5 py-4 flex flex-col gap-2 mt-5 ">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem name={item.name} Icon={item.icon} />
                    )
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navbar right section img */}
      <img
        src="https://www.shutterstock.com/image-vector/illustration-smiling-young-man-brown-600nw-2575185307.jpg"
        className=" w-8 rounded-full"
        alt=""
      />
    </div>
  );
};

export default Header;

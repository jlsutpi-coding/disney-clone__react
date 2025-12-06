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

const Header = () => {
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
      <div className=" flex gap-8 items-center">
        <img
          src={Disney_Logo}
          className=" w-10 md:w-[100px] object-cover "
          alt=""
        />
        {menu.map((item) => {
          return (
            <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
          );
        })}
      </div>
      <img
        src="https://www.shutterstock.com/image-vector/illustration-smiling-young-man-brown-600nw-2575185307.jpg"
        className=" w-10 rounded-full"
        alt=""
      />
    </div>
  );
};

export default Header;

import { AiFillGoogleSquare } from "react-icons/ai";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-[75px] mt-auto pt-[70px] pb-10 gap-[60px] flex flex-col">
      {/* Top info */}
      <div className=" flex justify-between">
        <h1 className=" max-w-111 font-medium text-[40px] leading-12 tracking-[0]">
          Our platform is trusted by millions & features best updated movies all
          around the world.
        </h1>

        <div className="flex flex-col">
          <ul className="flex gap-2">
            <Link to={"/"}>
              <li className=" font-normal text-[20px] leading-8">Home /</li>
            </Link>{" "}
            <Link>
              <li className=" font-normal text-[20px] leading-8">Discover /</li>
            </Link>
            <Link>
              <li className=" font-normal text-[20px] leading-8">
                Influencer /
              </li>
            </Link>
            <Link>
              <li className=" font-normal text-[20px] leading-8">Release</li>
            </Link>
          </ul>
          <div className="flex self-end mt-auto gap-10">
            <PiInstagramLogoFill size={32} className=" cursor-pointer" />
            <FaFacebookSquare size={32} className=" cursor-pointer" />
            <FaTwitterSquare size={32} className=" cursor-pointer" />
            <AiFillGoogleSquare size={32} className=" cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className=" flex items-center justify-between">
        <ul className="flex gap-[26px]">
          <li className=" font-normal text-[14px] leading-[22px] ">
            Privacy policy
          </li>
          <li className=" font-normal text-[14px] leading-[22px] ">
            Term of service
          </li>
          <li className=" font-normal text-[14px] leading-[22px] ">Language</li>
        </ul>
        <div className=" font-normal text-[14px] leading-[22px]">
          {new Date().getFullYear()} &copy;
        </div>
      </div>
    </div>
  );
};

export default Footer;

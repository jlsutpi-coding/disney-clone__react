import { Link } from "react-router-dom";

import { AiFillGoogleSquare } from "react-icons/ai";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className=" xl:px-[75px] lg:px-[45px] bg-[#0d0c0f]  md:px-[30px] px-5  md:pt-10 pt-[25px] lg:pt-[70px] mt-auto lg:pb-10 md:pb-[30px] pb-5 lg:gap-[60px] gap-5 md:gap-10 flex flex-col">
      {/* Top info */}
      <div className=" flex-col gap-5 lg:gap-0 lg:flex-row  justify-center items-start lg:items-stretch  flex lg:justify-between">
        <h1 className="w-full  lg:max-w-111 font-medium md:text-[30px]  text-[20px]  lg:text-[40px] leading-10 lg:leading-12 tracking-[0]">
          Our platform is trusted by millions & features best updated movies all
          around the world.
        </h1>

        <div className="flex flex-col-reverse md:flex-col gap-5 lg:gap-0   ">
          <ul className="flex gap-2">
            <li>
              <Link
                className="hover:opacity-70 font-normal text-[20px] leading-8"
                to={"/"}
              >
                Home /
              </Link>
            </li>
            <li>
              <Link
                className="hover:opacity-70 font-normal text-[20px] leading-8"
                to={"/discover"}
              >
                Discover /
              </Link>
            </li>
            <li>
              <Link
                className="hover:opacity-70 font-normal text-[20px] leading-8"
                to={"/about"}
              >
                About /
              </Link>
            </li>
            <li>
              <Link
                className="hover:opacity-70 font-normal text-[20px] leading-8"
                to={"/movie"}
              >
                Release /
              </Link>
            </li>
          </ul>
          <div className="flex self-start lg:self-end mt-auto gap-10">
            <PiInstagramLogoFill
              size={32}
              className=" cursor-pointer hover:opacity-70"
              aria-label="Instagram"
            />
            <FaFacebookSquare
              size={32}
              className=" cursor-pointer hover:opacity-70"
              aria-label="Facebook"
            />
            <FaTwitterSquare
              size={32}
              className=" cursor-pointer hover:opacity-70"
              aria-label="X or Twitter"
            />
            <AiFillGoogleSquare
              size={32}
              className=" cursor-pointer hover:opacity-70"
              aria-label="Google"
            />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className=" flex-col mt-2 lg:mt-0 gap-5 lg:gap-0 lg:flex-row flex items-center justify-between">
        <ul className="flex gap-[26px]">
          <li className=" cursor-pointer hover:opacity-70 font-normal text-[14px] leading-[22px] ">
            Privacy policy
          </li>
          <li className=" cursor-pointer hover:opacity-70 font-normal text-[14px] leading-[22px] ">
            Term of service
          </li>
          <li className=" cursor-pointer hover:opacity-70 font-normal text-[14px] leading-[22px] ">
            Language
          </li>
        </ul>
        <div className=" font-normal text-[14px] leading-[22px]">
          &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

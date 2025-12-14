import { useState } from "react";

import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const EpisodeDropdown = ({ season, seasons, setSeason }) => {
  const [isOpen, SetIsOpen] = useState(false);

  return (
    <div className=" relative">
      <button
        onClick={() => {
          SetIsOpen(!isOpen);
        }}
        className=" flex items-center gap-2.5 bg-[#0D0C0F] cursor-pointer rounded-lg py-1 px-4 border border-[#28262D] "
      >
        <span className=" text-[12px] font-bold leading-[22px] tracking-[0.5%]">
          Season {season}
        </span>
        {isOpen ? <RiArrowUpSLine size={16} /> : <RiArrowDownSLine size={16} />}
      </button>
      {isOpen && (
        <div className="absolute z-40 bottom-[-45px] h-10  ">
          <ul className="flex py-2 w-[120px]  bg-black overflow-hidden  flex-col rounded-lg">
            {seasons.map((season) => (
              <button
                key={season.id}
                onClick={() => {
                  setSeason(season.season_number);
                  SetIsOpen(false);
                }}
                className=" flex justify-center hover:bg-zinc-900 w-full items-center gap-2.5 cursor-pointer   py-1 px-4  "
              >
                <span className=" text-[12px] font-bold leading-[22px] tracking-[0.5%]">
                  Season {season.season_number}
                </span>
              </button>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EpisodeDropdown;

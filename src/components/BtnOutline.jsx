import React from "react";

const BtnOutline = ({ children, page, onClickFunction }) => {
  return (
    <button
      onClick={onClickFunction}
      aria-label="Add watch list"
      className={` ${page === "detail" ? "w-30" : "shrink  w-full "}  justify-center md:w-auto md:px-6 md:py-3 md:shrink-0   py-2 lg:py-3 rounded-[10px] border border-white flex items-center gap-2.5 cursor-pointer hover:bg-white/10 active:bg-white/20 active:scale-95 transition-all duration-200`}
    >
      {children}
    </button>
  );
};

export default BtnOutline;

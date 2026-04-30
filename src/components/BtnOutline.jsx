import React from "react";

const BtnOutline = ({ children, page, onClickFunction, isActive = false }) => {
  return (
    <button
      onClick={onClickFunction}
      aria-label="Add watch list"
      className={`
         flex items-center gap-2.5 cursor-pointer  justify-center  md:w-auto md:px-6 md:py-3 md:shrink-0   py-2 lg:py-3 rounded-[10px] transition-all duration-200
          ${page === "detail" ? "w-30" : "shrink  w-full "} 
           ${isActive ? "bg-[#eb3f5e] border-[#eb3f5e]" : " border-white hover:bg-white/10 active:bg-white/20 "} 
             active:scale-95  border `}
    >
      {children}
    </button>
  );
};

export default BtnOutline;

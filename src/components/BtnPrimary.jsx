import React from "react";

const BtnPrimary = ({ children, hidden, onClickFunction }) => {
  return (
    <button
      className={` ${hidden ? " sm:hidden" : ""} shrink md:w-auto md:px-6 md:shrink-0 py-2 w-full justify-center lg:py-3 rounded-[10px] bg-primary flex items-center gap-2 lg:gap-2.5   hover:bg-primary/80 active:bg-primary/60 active:scale-95 transition-all duration-200 cursor-pointer `}
      onClick={onClickFunction}
    >
      {children}
    </button>
  );
};

export default BtnPrimary;

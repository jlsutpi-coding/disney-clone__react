const DetailSkeleton = ({ page = "home" }) => {
  return (
    <div className="relative w-full overflow-hidden h-[480px] sm:h-[550px] lg:h-[600px] animate-pulse">
      {/* Background skeleton */}
      <div className="w-full h-full bg-[#1a1a1a]" />

      {/* Gradient overlay (keep it, but lighter) */}
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-t from-black via-black/60 to-transparent" />

      {/* Content */}
      <div
        className="absolute w-full bottom-0 z-20 flex flex-col sm:flex-row gap-4
        justify-between px-5 md:px-[45px] lg:px-[75px]
        md:py-14 py-10 lg:py-16"
      >
        {/* Left section */}
        <div className="w-full flex flex-col gap-4">
          {/* Media type badge */}
          <div className="w-16 h-6 rounded-xl bg-[#2a2a2a]" />

          {/* Title */}
          <div className="w-[70%] h-8 lg:h-10 rounded-md bg-[#2a2a2a]" />

          {/* Meta info */}
          <div className="w-[90%] h-4 rounded-md bg-[#2a2a2a]" />

          {/* Buttons (desktop) */}
          <div className="hidden sm:flex gap-4 mt-4">
            <div className="w-32 h-12 rounded-[10px] bg-[#2a2a2a]" />
            <div className="w-44 h-12 rounded-[10px] bg-[#2a2a2a]" />
          </div>
        </div>

        {/* Right buttons */}
        {page !== "home" && (
          <div className="flex gap-3 w-full sm:w-auto">
            <div className="sm:hidden w-full h-10 rounded-[10px] bg-[#2a2a2a]" />
            <div className="w-12 h-10 rounded-[10px] bg-[#2a2a2a]" />
            <div className="w-12 h-10 rounded-[10px] bg-[#2a2a2a]" />
            <div className="w-12 h-10 rounded-[10px] bg-[#2a2a2a]" />
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailSkeleton;

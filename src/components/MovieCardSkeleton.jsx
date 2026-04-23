const MovieCardSkeleton = ({ type = "col" }) => {
  // 🔹 Column (grid) card skeleton
  if (type === "col") {
    return (
      <div className="relative shrink-0 h-100 w-62 animate-pulse rounded-xl overflow-hidden">
        {/* Poster */}
        <div className="absolute inset-0 bg-[#1f1f1f] " />

        {/* Bottom gradient content */}
        <div className="absolute bottom-0 left-0 w-full p-3 bg-linear-to-t from-black/80 to-transparent">
          {/* Title */}
          <div className="h-4 w-[80%] mb-3 rounded bg-[#2a2a2a]" />

          {/* Rating */}
          <div className="h-3 w-12 rounded bg-[#2a2a2a]" />
        </div>
      </div>
    );
  }

  // 🔹 Row (horizontal scroll) card skeleton
  return (
    <div className="w-[300px] shrink-0 animate-pulse">
      {/* Backdrop image */}
      <div className="h-[183px] w-full bg-[#1f1f1f] rounded-2xl mb-3" />

      {/* Title */}
      <div className="h-4 w-[85%] mb-3 rounded bg-[#2a2a2a]" />

      {/* Rating + genres */}
      <div className="flex gap-2">
        <div className="h-3 w-10 rounded bg-[#2a2a2a]" />
        <div className="h-3 w-20 rounded bg-[#2a2a2a]" />
      </div>
    </div>
  );
};

export default MovieCardSkeleton;

import { useRef } from "react";

import { Link } from "react-router-dom";

const HouseItem = ({ item }) => {
  const videoRef = useRef(null);

  const handleEnter = () => {
    // disable on small screens
    if (window.innerWidth < 1024) return;

    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {
        // autoplay blocked (normal behavior)
        // you can optionally show a play icon here
      });
    }
  };

  return (
    <Link
      to={`/discover/${item.id}`}
      className="relative cursor-pointer group w-[120px] h-12  md:h-12 md:w-[150px] lg:h-24 lg:w-[180px] shrink-0 flex items-center border-2 border-gray-600 rounded-lg overflow-hidden"
      onMouseEnter={handleEnter}
      onMouseLeave={() => videoRef.current?.pause()}
    >
      <video
        ref={videoRef}
        src={item.video}
        preload="metadata"
        loop
        muted
        playsInline
        onLoadedData={() => videoRef.current.pause()} // ready before hover
        className="absolute hidden lg:block inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      <img
        src={item.logo}
        className="relative z-10 w-full h-full object-contain md:object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-300"
        alt=""
      />
    </Link>
  );
};

export default HouseItem;

import { useRef } from "react";

import { Link } from "react-router-dom";

const HouseItem = ({ item }) => {
  const videoRef = useRef(null);

  const handleEnter = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play();
    }
  };

  return (
    <Link
      to={`/discover/${item.id}`}
      className="relative cursor-pointer group h-24 w-[180px] shrink-0 flex items-center border-2 border-gray-600 rounded-lg overflow-hidden"
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
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      <img
        src={item.logo}
        className="relative z-10 w-full opacity-100 group-hover:opacity-0 transition-opacity duration-300"
        alt=""
      />
    </Link>
  );
};

export default HouseItem;

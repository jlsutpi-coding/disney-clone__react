import React, { useState } from "react";

const ImageUrl = ({ imageUrl, template, alt }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={`relative ${template === "row" ? "rounded-2xl" : "rounded-xl"} overflow-hidden w-full h-full bg-[#1f1f1f]`}
    >
      {imageUrl && !imageError ? (
        <img
          src={imageUrl}
          alt={alt}
          onError={() => {
            setImageError(true);
          }}
          className={`absolute w-full h-full object-cover hover:scale-105 transition-all duration-300 `}
          loading="lazy"
        />
      ) : (
        <div className="absolute w-full h-full flex justify-center bg-[#1f1f1f] items-center text-sm text-gray-400">
          No image
        </div>
      )}
    </div>
  );
};

export default ImageUrl;

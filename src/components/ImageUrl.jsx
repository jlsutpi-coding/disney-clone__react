import React, { useState } from "react";

const ImageUrl = ({ imageUrl, template, alt }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div
      className={`relative ${template === "row" ? "rounded-2xl" : "rounded-xl"} overflow-hidden w-full h-full`}
    >
      {imageUrl && !imageError && imageLoading && (
        <div className=" absolute inset-0 animate-pulse bg-[#1f1f1f]"></div>
      )}
      {imageUrl && !imageError ? (
        <img
          src={imageUrl}
          alt={alt}
          onError={() => {
            setImageError(true);
            setImageLoading(false);
          }}
          className={`absolute w-full h-full object-cover transition-opacity duration-300 ${imageLoading ? "opacity-0" : "opacity-100"}`}
          onLoad={() => setImageLoading(false)}
        />
      ) : (
        <div className="absolute w-full h-full flex justify-center items-center text-sm text-gray-400">
          No image
        </div>
      )}
    </div>
  );
};

export default ImageUrl;

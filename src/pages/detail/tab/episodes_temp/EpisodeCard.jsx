import React from "react";

import GlobalApi from "../../../../services/GlobalApi";
import ImageUrl from "../../../../components/ImageUrl";

const EpisodeCard = ({ episode }) => {
  const imageUrl = episode?.still_path
    ? `${GlobalApi.IMAGE_BASE_URL}/${episode.still_path}`
    : "";

  return (
    <div className="relative  max-w-[300px]  h-[197px] rounded-2xl overflow-hidden  cursor-pointer shrink-0">
      <ImageUrl imageUrl={imageUrl} template={"row"} alt={episode.name} />
      <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black via-black/80 to-transparent pt-10 pb-4 px-5">
        <h4 className=" font-bold text-[16px] leading-6 tracking-[0.5%] text-[#F9F9F9]">
          {episode.name}
        </h4>
        <p className="pt-1 text-[#78828A] text-[12px] font-normal leading-5 tracking-[0.5%]">
          {episode.overview.length > 70
            ? episode.overview.slice(0, 70) + "..."
            : episode.overview}
        </p>
      </div>
    </div>
  );
};

export default EpisodeCard;

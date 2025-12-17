import { useEffect, useState } from "react";

import GlobalApi from "../../../../services/GlobalApi.jsx";
import EpisodeDropdown from "./EpisodeDropdown.jsx";
import HorizontalScroller from "../../../../components/HorizontalScroller.jsx";

function Episodes({ detail }) {
  const { id, seasons } = detail;
  const [episodes, setEpisodes] = useState([]);
  const [season, setSeason] = useState(1);

  useEffect(() => {
    const fetchEpisodesOfSeason = async () => {
      const response = await GlobalApi.getEpisdoesOfSeries(id, season);
      setEpisodes(response.data.episodes);
    };
    fetchEpisodesOfSeason();
  }, [id, season]);

  return (
    <div className=" md:py-7 py-10 ">
      {/* header */}
      <div className=" mb-6 flex justify-between items-center ">
        <h4 className=" font-bold text-[24px] leading-8 tracking-[0.5%]">
          {season}-{" "}
          {seasons.find((item) => item.season_number === season)?.episode_count}{" "}
          Episodes
        </h4>

        <EpisodeDropdown
          setSeason={setSeason}
          season={season}
          seasons={seasons}
        />
      </div>
      {/* eposides list */}
      <HorizontalScroller>
        {episodes.map((episode) => (
          <div
            key={episode.id}
            className="  lg:w-[301px] h-[197px] rounded-2xl overflow-hidden relative cursor-pointer shrink-0"
          >
            <img
              src={`${GlobalApi.IMAGE_BASE_URL}/${episode.still_path}`}
              alt="episode-image"
              className=" rounded-2xl w-full h-full object-cover"
            />
            <div className="absolute bg-linear-to-t from-black to-transparent bottom-0 py-2 px-5 w-full rounded-b-2xl -left-px">
              <h4 className=" font-bold text-[16px] leading-6 tracking-[0.5%] text-[#F9F9F9]">
                {" "}
                {episode.name}
              </h4>
              <p className="pt-1 text-[#78828A] text-[12px] font-normal leading-5 tracking-[0.5%]">
                {episode.overview.length > 70
                  ? episode.overview.slice(0, 70) + "..."
                  : episode.overview}
              </p>
            </div>
          </div>
        ))}
      </HorizontalScroller>
    </div>
  );
}

export default Episodes;

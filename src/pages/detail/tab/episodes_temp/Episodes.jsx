import { useEffect, useState } from "react";

import { SwiperSlide } from "swiper/react";

import GlobalApi from "../../../../services/GlobalApi.jsx";
import EpisodeDropdown from "./EpisodeDropdown.jsx";
import HorizontalScroller from "../../../../components/HorizontalScroller.jsx";
import EpisodeCard from "./EpisodeCard.jsx";

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
          <SwiperSlide key={episode.id}>
            <EpisodeCard episode={episode} />
          </SwiperSlide>
        ))}
      </HorizontalScroller>
    </div>
  );
}

export default Episodes;

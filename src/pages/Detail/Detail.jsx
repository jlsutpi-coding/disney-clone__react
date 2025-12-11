import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/Header";
import DetailInformation from "./DetailInformation";
import Similar from "./Similar";
import GlobalApi from "../../services/GlobalApi";
import Footer from "../../components/Footer";

const Detail = () => {
  const { movie_id, media_type } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await GlobalApi.getMovieDeatail(movie_id, media_type);
      setDetail(response.data);
    };
    fetchData();
  }, [movie_id, media_type]);

  if (!detail) {
    return null;
  }

  const title =
    media_type === "movie" ? detail.original_title : detail.original_name;

  const latest_release_date =
    media_type === "movie"
      ? new Date(detail.release_date).getFullYear()
      : new Date(detail.last_air_date).getFullYear();

  return (
    <>
      <div className="fixed top-0 z-20 left-0 w-full bg-linear-to-b from-[#0d0c0f] to-tarnsparent">
        <Header />
      </div>

      <div className=" relative w-full overflow-hidden">
        {/* Background Image */}
        <img
          src={`${GlobalApi.IMAGE_BASE_URL}/${detail?.backdrop_path}`}
          className="w-full h-[600px] object-cover"
          alt=""
        />

        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 w-full h-[200px] bg-linear-to-b from-transparent to-[#0d0c0f]" />

        {/* Content */}
        <div className="absolute bottom-10 left-0 w-full px-[75px]">
          <div className="flex items-end justify-between w-full">
            {/* LEFT SECTION */}
            <div className="text-white max-w-xl space-y-4">
              <p className="px-3 py-auto w-fit flex items-center py-1  bg-black rounded-xl text-sm">
                {media_type === "movie" ? "movie" : "series"}
              </p>

              <h1 className="text-4xl font-bold">{title}</h1>

              <p className="text-gray-300 text-sm">
                <span>{latest_release_date} .</span>
                {detail.genres.map((item) => (
                  <span className=" pr-2" key={item.id}>
                    {item.name}
                  </span>
                ))}
              </p>

              <div className="flex gap-4">
                <button className="cursor-pointer px-6 py-3 rounded-lg bg-[#00925D] text-white font-semibold">
                  Continue Watching
                </button>
                <button className="cursor-pointer px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white">
                  Add Watchlist
                </button>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="flex gap-4">
              <button className="cursor-pointer px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white">
                Download
              </button>
              <button className="cursor-pointer px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white">
                Share
              </button>
              <button className="cursor-pointer px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white">
                Like
              </button>
            </div>
          </div>
        </div>
      </div>

      <DetailInformation detail={detail} media_type={media_type} />
      <Similar media_type={media_type} id={detail.id} />
      <Footer />
    </>
  );
};

export default Detail;

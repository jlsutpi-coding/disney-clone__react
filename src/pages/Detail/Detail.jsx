import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { FaCirclePlay } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import { GoDownload, GoShareAndroid } from "react-icons/go";
import { AiOutlineLike } from "react-icons/ai";

import DetailInformation from "./DetailInformation";
import Similar from "./Similar";
import GlobalApi from "../../services/GlobalApi";
import Hero from "./Hero";

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [movie_id, media_type]);

  if (!detail) {
    return null;
  }

  return (
    <>
      <Hero media_type={media_type} detail={detail} />
      <DetailInformation detail={detail} media_type={media_type} />
      <Similar media_type={media_type} id={detail.id} />
    </>
  );
};

export default Detail;

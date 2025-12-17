import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DetailInformation from "./DetailInformation.jsx";
import Similar from "./Similar.jsx";
import GlobalApi from "../../services/GlobalApi.jsx";
import Hero from "./Hero.jsx";
import Tab from "./tab/Tab.jsx";

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
      <Tab detail={detail} />
      <Similar media_type={media_type} id={detail.id} />
    </>
  );
};

export default Detail;

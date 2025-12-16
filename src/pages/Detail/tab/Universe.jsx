import { useEffect, useState } from "react";

import GlobalApi from "../../../services/GlobalApi";
import HorizontalScroller from "../../../components/HorizontalScroller";
import SimilarCard from "../SimilarCard";

const Universe = ({ detail }) => {
  const { belongs_to_collection } = detail;
  const [universe, setUniverse] = useState([]);

  useEffect(() => {
    // console.log("Universe Tab Loaded");
    if (belongs_to_collection) {
      const fetchUniverse = async () => {
        const response = await GlobalApi.getCollection(
          belongs_to_collection.id
        );
        //  filter out the exsited show deatil card
        const data = response.data.parts.filter(
          (item) => item.id !== detail.id
        );

        setUniverse(data);
      };
      fetchUniverse();
    }
  }, [belongs_to_collection, detail]);

  if (!universe.length) return null;
  return (
    <div className=" py-10 w-full">
      <HorizontalScroller>
        {universe.map((item) => (
          <SimilarCard key={item.id} item={item} media_type={item.media_type} />
        ))}
      </HorizontalScroller>
    </div>
  );
};

export default Universe;

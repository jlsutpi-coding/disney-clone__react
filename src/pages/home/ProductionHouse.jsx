import { PRODUCTION_COMPANIES } from "../../data/Companies";
import HouseItem from "./HouseItem";

import "./ProductionHouse.css";

const ProductionHouse = () => {
  const sliderItems = [...PRODUCTION_COMPANIES, ...PRODUCTION_COMPANIES];

  return (
    <div className="w-full overflow-hidden py-10">
      <div className="slider-track md:gap-5 ">
        {sliderItems.map((item, index) => (
          <HouseItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductionHouse;

import { PRODUCTION_COMPANIES } from "../../data/Companies.js";
import HouseItem from "./HouseItem.jsx";

import "./ProductionHouse.css";

const ProductionHouse = () => {
  const sliderItems = [...PRODUCTION_COMPANIES, ...PRODUCTION_COMPANIES];

  return (
    <div className="w-full overflow-hidden py-10">
      <div className="slider-track gap-3 md:gap-5 ">
        {sliderItems.map((item, index) => (
          <HouseItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductionHouse;

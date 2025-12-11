import { Link } from "react-router-dom";
import { PRODUCTION_COMPANIES } from "../../constant/Companies";

const ProductionHouse = () => {
  return (
    <div className="flex gap-2 overflow-x-auto no-scrollbar md:gap-5 p-2 px-5  md:px-16">
      <img src="/assets/images/logos/marvel.png" alt="" />
      {PRODUCTION_COMPANIES.map((item) => (
        <Link
          to={`/company/${item.id}`}
          key={item.id}
          className="relative cursor-pointer group h-14 w-40 flex items-center border-2 border-gray-600 rounded-lg overflow-hidden transition-all duration-300"
        >
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></video>
          <img
            src={item.logo}
            className="relative z-10 w-full hover:opacity-0  transition-opacity duration-300 opacity-100 "
            alt=""
          />
        </Link>
      ))}
    </div>
  );
};

export default ProductionHouse;

import GlobalApi from "../../services/GlobalApi";

const LargeMovieCard = ({ item }) => {
  return (
    <div className=" hover:scale-110 transition-all duration-300 hover:rounded-b-md ease-in cursor-pointer">
      <img
        src={GlobalApi.IMAGE_BASE_URL + item.backdrop_path}
        className=" w-[110px]  md:w-[260px]  rounded-md hover:border border-gray-500"
        alt=""
      />
      <h2 className="w-[110px]  md:w-[260px] text-white mt-2">{item.title}</h2>
    </div>
  );
};

export default LargeMovieCard;

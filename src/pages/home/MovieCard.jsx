import GlobalApi from "../../services/GlobalApi";

const MovieCard = ({ item }) => {
  return (
    <img
      src={GlobalApi.IMAGE_BASE_URL + item.poster_path}
      className=" w-[110px] md:w-[200px] rounded-md hover:border border-gray-500 hover:scale-110 transition-all duration-300 hover:rounded-b-md ease-in"
      alt=""
    />
  );
};

export default MovieCard;

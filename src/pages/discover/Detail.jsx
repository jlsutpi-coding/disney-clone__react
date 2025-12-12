import GlobalApi from "../../services/GlobalApi";

const Detail = ({ movie }) => {
  return (
    <div>
      <img
        src={`${GlobalApi.IMAGE_BASE_URL}/${movie.poster_path}`}
        alt="company-detail-Image"
        className=" h-80 rounded-xl"
      />
    </div>
  );
};

export default Detail;

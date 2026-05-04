import React from "react";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { selectWatchlistItems } from "../../redux/slices/watchlistSlice";

import ColMovieCard from "../../components/ColMovieCard";

const WatchlistPage = () => {
  const watchlistItems = useSelector(selectWatchlistItems);
  return (
    <div className=" pt-40  py-20 px-10 ">
      <div className=" flex gap-10 ">
        {watchlistItems?.map((item) => (
          <Link key={item.id} to={`/${item.title ? "movie" : "tv"}/${item.id}`}>
            <ColMovieCard item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WatchlistPage;

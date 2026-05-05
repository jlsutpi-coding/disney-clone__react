import React from "react";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { selectWatchlistItems } from "../../redux/slices/watchlistSlice";

import ColMovieCard from "../../components/ColMovieCard";

const WatchlistPage = () => {
  const watchlistItems = useSelector(selectWatchlistItems);
  console.log(watchlistItems);
  return (
    <div className=" pt-40  py-20 px-10 ">
      <h4 className="my-5 text-2xl font-extrabold">Your Watchlist</h4>
      <div className=" flex gap-10 ">
        {watchlistItems?.map((item) => (
          <Link key={item.id} to={`/${item.title ? "movie" : "tv"}/${item.id}`}>
            <ColMovieCard item={item} page="watchlist" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WatchlistPage;

import React from "react";
import ItemSwiper from "../itemSwiper/itemSwiper";

const TopRatedMovies = ({ topRatedMovies }) => {
  return (
    <div className="">
      <ItemSwiper type={"Top Rated"} items={topRatedMovies} />
    </div>
  );
};

export default TopRatedMovies;

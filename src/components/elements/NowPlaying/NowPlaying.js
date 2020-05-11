import React from "react";
import ItemSwiper from "../itemSwiper/itemSwiper";

const NowPlaying = ({ nowPlayingMovies }) => {
  return (
    <div className="">
      <ItemSwiper type={"Now Playing"} items={nowPlayingMovies} />
    </div>
  );
};

export default React.memo(NowPlaying);

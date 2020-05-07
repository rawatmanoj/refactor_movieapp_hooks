import React from "react";
import ItemSwiper from "../itemSwiper/itemSwiper";

const NowPlaying = ({ nowPlayingMovies }) => {
  return (
    <div className="UpcomingitemSwiper-container">
      <ItemSwiper type={"Now Playing"} items={nowPlayingMovies} />
    </div>
  );
};

export default NowPlaying;

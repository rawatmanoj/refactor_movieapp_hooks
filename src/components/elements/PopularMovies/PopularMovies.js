import React from "react";
import ItemSwiper from "../itemSwiper/itemSwiper";
import "./PopularMovies.scss";
const PopularMovies = ({ popularMovies }) => {
  return (
    <div clasname="itemSwiper-container">
      <ItemSwiper type={"Popular"} items={popularMovies} />
      <ItemSwiper items={popularMovies} />
      <ItemSwiper items={popularMovies} />
    </div>
  );
};

export default PopularMovies;

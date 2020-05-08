import React from "react";
import ItemSwiper from "../itemSwiper/itemSwiper";
import "./PopularMovies.scss";
const PopularMovies = ({ popularMovies }) => {
  return (
    <div clasname="">
      <ItemSwiper type={"Popular"} items={popularMovies} />
    </div>
  );
};

export default PopularMovies;

import React from "react";
import axios from "axios";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from "../../../config";
//  image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImages[0].backdrop_path}`}
// const useHeroimage = () => {

// };
const Heroimage = ({ images }) => {
  //useHeroimage();
  console.log(images);
  const image = `${IMAGE_BASE_URL}${BACKDROP_SIZE}${images[0]}`;
  return (
    <div className="image-container">
      <img src={image} />
    </div>
  );
};

export default Heroimage;

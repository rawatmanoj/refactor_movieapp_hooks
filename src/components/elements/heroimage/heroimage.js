import React from "react";
import axios from "axios";
import Swiper from "react-id-swiper";
import "./heroimage.scss";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../../config";

const Heroimage = ({ images }) => {
  const params = {
    observer: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <Swiper {...params}>
      {images.map((photo, i) => {
        return (
          <div key={i} className="imagediv-container">
            <div className="heroimage-container">
              <img
                className="heroimage"
                src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${photo}`}
              />
            </div>
          </div>
        );
      })}
    </Swiper>
  );
};

export default Heroimage;

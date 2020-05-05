import React from "react";
import axios from "axios";
import Swiper from "react-id-swiper";
import "./heroimage.scss";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../../config";

const Heroimage = ({ images }) => {
  console.log(images);
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
      {images.map((photo) => {
        return (
          <div key={photo.id} className="imagediv-container">
            <div
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) center center / cover no-repeat, 
                url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${photo.backdrop_path}) center top / cover no-repeat rgb(255, 255, 255)`,
              }}
              className="heroimage-container"
            >
              <h1>HI</h1>
            </div>
          </div>
        );
      })}
    </Swiper>
  );
};

export default Heroimage;

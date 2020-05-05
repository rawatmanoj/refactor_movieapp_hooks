import React from "react";
import axios from "axios";
import Swiper from "react-id-swiper";
import "./heroimage.scss";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
} from "../../../config";

const Heroimage = ({ images, genres }) => {
  const getGenre = (photo) => {
    const genre = genres.find((genre) => {
      if (genre.id == photo.genre_ids[0]) {
        return genre;
      }
    });

    return genre;
  };

  // console.log(images);
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
      {images
        ? images.map((photo) => {
            const genre = getGenre(photo);
            console.log(genre);
            return (
              <div key={photo.id} className="imagediv-container">
                <div
                  style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) center center / cover no-repeat, 
                url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${photo.backdrop_path}) center top / cover no-repeat rgb(255, 255, 255)`,
                  }}
                  className="heroimage-container"
                >
                  <div className="heroimage-desc">
                    <h1>{photo.title}</h1>
                    <h2>{photo.vote_average} Rating</h2>
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </Swiper>
  );
};

export default Heroimage;

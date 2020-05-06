import React from "react";
import Swiper from "react-id-swiper";
import "./itemSwiper.scss";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
} from "../../../config";

const ItemSwiper = ({ items }) => {
  console.log(items);
  const params = {
    observer: true,
    slidesPerView: 7,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <Swiper {...params}>
      {items
        ? items.map((item) => {
            if (item !== undefined && item !== null) {
              return (
                <div key={item.id} className="items-container">
                  <div className="movies-container">
                    <div
                      className="movies"
                      style={{
                        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) center center / cover no-repeat,
                url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${item.poster_path}) center top / cover no-repeat rgb(255, 255, 255)`,
                      }}
                    ></div>
                  </div>
                </div>
              );
            }
          })
        : null}
    </Swiper>
  );
};

export default ItemSwiper;

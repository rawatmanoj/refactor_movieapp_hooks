import React from "react";
import Swiper from "react-id-swiper";
import "./itemSwiper.scss";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
} from "../../../config";

const ItemSwiper = ({ items, type }) => {
  const renderMovieDesc = (title) => {
    if (title.length < 45) {
      return <h3>{title}</h3>;
    } else {
      let shrink = title.split(" ").splice(0, 3).join(" ");
      return <h3>{shrink}</h3>;
    }
  };
  console.log(items);
  const params = {
    observer: true,
    observeParents: true,
    // spaceBetween: 50,
    rebuildOnUpdate: true,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1400: {
        slidesPerView: 7,
        spaceBetween: 70,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 60,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      320: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  };

  return (
    <div className="items-swiper-container">
      <div className="desc-type">{type}</div>
      <Swiper {...params}>
        {items
          ? items.map((item) => {
              if (item !== undefined && item !== null) {
                return (
                  <div>
                    <div style={{ height: "2.2rem" }}></div>
                    <div key={item.id} className="items-container">
                      <div className="movies">
                        <img
                          className="movies-img"
                          alt="movie-image"
                          src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${item.poster_path}`}
                        ></img>
                      </div>
                    </div>
                    <div className="movie-desc">
                      {renderMovieDesc(item.title)}
                    </div>
                  </div>
                );
              }
            })
          : null}
      </Swiper>
    </div>
  );
};

export default ItemSwiper;

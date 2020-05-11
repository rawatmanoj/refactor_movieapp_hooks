import React from "react";
import Swiper from "react-id-swiper";
import "./heroimage.scss";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../../config";

const Heroimage = ({ images, genres }) => {
  const getGenre = (photo) => {
    const genre = genres.find((genre) => {
      return genre.id === photo.genre_ids[0];
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
  };

  return (
    <div className="heroimage-container">
      <Swiper {...params}>
        {images
          ? images.map((photo) => {
              // if (photo !== undefined && photo !== null) {
              const genre = getGenre(photo);

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
                      {genre !== undefined ? <h2>{genre.name}</h2> : null}
                    </div>
                  </div>
                </div>
              );
              // }
            })
          : null}
      </Swiper>
    </div>
  );
};

export default React.memo(Heroimage);

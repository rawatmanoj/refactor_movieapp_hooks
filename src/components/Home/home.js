import React, { useState, useEffect } from "react";
import Header from "../elements/Header/header";
import Heroimage from "../elements/heroimage/heroimage";
import axios from "axios";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from "../../config";

const useSearch = (data) => {
  console.log(data);
};

const useHeroimage = () => {
  const [Heroimage, setHeroimage] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios(
        `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );

      const posterImages = res.data.results.filter((result, i) => {
        if (i < 5 && result.backdrop_path !== null) {
          return result;
        }
      });
      console.log(res);
      setHeroimage(posterImages);
    })();
  }, []);
  return Heroimage;
};

const Home = () => {
  const images = useHeroimage();

  //console.log(Heroimages);

  return (
    <div className="home-container">
      <Header onSearch={useSearch} />
      {images ? <Heroimage images={images} /> : null}
    </div>
  );
};

export default Home;

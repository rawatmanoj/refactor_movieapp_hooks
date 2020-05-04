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

      const posterImages = res.data.results.map((result, i) => {
        return result.poster_path;
      });

      console.log(res.data.results[0].poster_path);

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
      <Heroimage images={images} />
    </div>
  );
};

export default Home;

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
  const [genres, setGenre] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios(
        `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      ).catch((err) => console.log(err));

      const genres = await axios(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
      ).catch((err) => console.log(err));

      const genresList = genres.data.genres.map((genre) => {
        return genre;
      });

      setGenre(genresList);
      //console.log(genresList);

      const posterImages = res.data.results.filter((result, i) => {
        if (i < 5 && result.backdrop_path !== null) {
          return result;
        }
      });
      console.log(res);

      setHeroimage(posterImages);
    })();
  }, []);
  return { Heroimage, genres };
};

const Home = () => {
  //const genres = getGenres();
  const images = useHeroimage().Heroimage;
  const genres = useHeroimage().genres;

  //console.log(genres);

  return (
    <div className="home-container">
      <Header onSearch={useSearch} />
      {images ? <Heroimage images={images} genres={genres} /> : null}
    </div>
  );
};

export default Home;

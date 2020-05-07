import React, { useState, useEffect } from "react";
import Header from "../elements/Header/header";
import Heroimage from "../elements/heroimage/heroimage";
import PopularMovies from "../elements/PopularMovies/PopularMovies";
import UpcomingMovies from "../elements/UpcomingMovies/UpcomingMovies";
import NowPlaying from "../elements/NowPlaying/NowPlaying";
import axios from "axios";
import { API_URL, API_KEY } from "../../config";

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
        if (i < 8 && result.backdrop_path !== null) {
          return result;
        }
      });
      console.log(res);

      setHeroimage(posterImages);
    })();
  }, []);
  return { Heroimage, genres };
};

function usePopularMovies() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios(
        `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      ).catch((err) => console.log(err));

      const popularMoviesList = res.data.results.filter((result, i) => {
        if (i < 8) {
          return result;
        }
      });

      setPopularMovies(popularMoviesList);
    })();
  }, []);
  return popularMovies;
}

function useUpcomingMovies() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios(
        `${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      ).catch((err) => console.log(err));

      // console.log(res);

      const upcomingMoviesList = res.data.results.filter((result, i) => {
        if (i < 8) {
          return result;
        }
      });
      setUpcomingMovies(upcomingMoviesList);
    })();
  }, []);
  return upcomingMovies;
}

function useNowplayingMovies() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios(
        `${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
      ).catch((err) => console.log(err));

      // console.log(res);

      const nowPlayingMoviesList = res.data.results.filter((result, i) => {
        if (i < 8) {
          return result;
        }
      });
      setNowPlayingMovies(nowPlayingMoviesList);
    })();
  }, []);
  return nowPlayingMovies;
}

const Home = () => {
  const images = useHeroimage().Heroimage;
  const genres = useHeroimage().genres;

  const popularMovies = usePopularMovies();
  const upcomingMovies = useUpcomingMovies();
  const nowPlayingMovies = useNowplayingMovies();
  //console.log(upcomingMovies);

  return (
    <div className="home-container">
      <Header onSearch={useSearch} />
      {images ? <Heroimage images={images} genres={genres} /> : null}
      <PopularMovies popularMovies={popularMovies} />
      <UpcomingMovies upcomingMovies={upcomingMovies} />
      <NowPlaying nowPlayingMovies={nowPlayingMovies} />
    </div>
  );
};

export default Home;

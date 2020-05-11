import React, { useState, useEffect, useCallback } from "react";
import Header from "../elements/Header/header";
import Heroimage from "../elements/heroimage/heroimage";
import PopularMovies from "../elements/PopularMovies/PopularMovies";
import UpcomingMovies from "../elements/UpcomingMovies/UpcomingMovies";
import NowPlaying from "../elements/NowPlaying/NowPlaying";
import TopRated from "../elements/TopRatedMovies/TopRatedMovies";
import axios from "axios";
import HomeFooter from "../elements/HomeFooter/HomeFooter";
import SearchItems from "../elements/SearchItems/SearchItems";
import { API_URL, API_KEY } from "../../config";

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
      const posterImages = () => {
        const images = res.data.results.filter((result, i) => {
          return result;
        });

        return images;
      };

      setHeroimage(posterImages);
    })();
  }, []);
  return { Heroimage, genres };
};

function useUpcomingMovies() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios(
        `${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      ).catch((err) => console.log(err));

      const upcomingMoviesList = () => {
        const list = res.data.results.filter((result, i) => {
          return result;
        });

        return list;
      };

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

      const nowPlayingMoviesList = () => {
        const list = res.data.results.filter((result, i) => {
          return result;
        });

        return list;
      };

      setNowPlayingMovies(nowPlayingMoviesList);
    })();
  }, []);
  return nowPlayingMovies;
}

function useTopRatedMovies() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios(
        `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      ).catch((err) => console.log(err));

      const topRatedMoviesList = () => {
        const list = res.data.results.filter((result, i) => {
          return result;
        });

        return list;
      };

      setTopRatedMovies(topRatedMoviesList);
    })();
  }, []);
  return topRatedMovies;
}

const Home = () => {
  const [search, setSearch] = useState(null);

  const useSearch = async (data) => {
    const res = await axios(
      `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${data.name}&page=1&include_adult=true`
    );

    setSearch(res);
    return search;
  };

  const res = useHeroimage();
  const images = res.Heroimage;
  const genres = res.genres;

  const upcomingMovies = useUpcomingMovies();
  const nowPlayingMovies = useNowplayingMovies();
  const topRatedMovies = useTopRatedMovies();
  console.log(search);

  return (
    <div className="home-container">
      <div className="fixed-header">
        <Header onSearch={useSearch} />
      </div>
      {search === null ? (
        <div>
          {images ? <Heroimage images={images} genres={genres} /> : null}

          <div className="home-movie-list">
            <PopularMovies popularMovies={images} />
            <UpcomingMovies upcomingMovies={upcomingMovies} />
            <NowPlaying nowPlayingMovies={nowPlayingMovies} />
            <TopRated topRatedMovies={topRatedMovies} />
            <HomeFooter />
          </div>
        </div>
      ) : (
        <SearchItems />
      )}
    </div>
  );
};

export default Home;

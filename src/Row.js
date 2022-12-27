import React, { useState, useEffect } from "react";
import instance from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const baseImgUrl = "http://image.tmdb.org/t/p/original/";

  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      console.log("main request", request);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (i) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(i?.name || i?.title)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);

          //https://www.youtube.com/watch?v=8gf-3OFYptU

          setTrailerUrl(urlParams.get("v"));
          console.log(setTrailerUrl);
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="row">
      <h3 className="rowTitle">{title}</h3>

      <div className="row_posters">
        {movies.map((i) => (
          <img
            key={i.id}
            onClick={() => handleClick(i)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${baseImgUrl}${isLargeRow ? i.poster_path : i.backdrop_path}`}
            alt={i.title}
          />
        ))}
      </div>

      <div>{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}</div>
    </div>
  );
};

export default Row;

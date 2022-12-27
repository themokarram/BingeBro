import { React, useState, useEffect } from "react";
import requests from "./request";
import instance from "./axios";
import "./Banner.css";

const Banner = () => {
  const baseImgUrl = "http://image.tmdb.org/t/p/original/";

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await instance.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n
      ? str.substr(0, n - 1) + "..."
      : "No description Found...";
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${baseImgUrl}${movie?.backdrop_path})`,
        width: "100%",
      }}
    >
      <div className="banner_contents" key={movie.id}>
        <h1 className="title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <div className="description">
          <h5>{truncate(movie?.overview, 150)}</h5>
        </div>
      </div>
      <div className="fadeaway" />
    </header>
  );
};

export default Banner;

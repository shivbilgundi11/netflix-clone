import axios from "../axios/axios";
import { useEffect } from "react";
import { useState } from "react";
import requests from "../axios/requests";
import { Info } from "lucide-react";
import { FaPlay } from "react-icons/fa";
import { backgroundURL } from "../constants/resource";

const truncate = (string, num) => {
  return string?.length > num ? string.substr(0, num - 1) + "..." : string;
};

const Banner = () => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }

    fetchData();
  }, []);

  if(!movie){
    return
  }

  return (
    <>
      <section className="relative w-full h-[50vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh] overflow-hidden">
        {/* Movie Poster Background */}
        <div className="w-full h-full">
          <img
            src={`${backgroundURL}${movie?.backdrop_path}`}
            alt="background_poster"
            className="w-full h-full block object-cover object-center"
          />
        </div>
        {/* Black shadow overlay */}
        <div className="w-full h-full absolute top-0 left-0 gradient-bg"></div>

        {/* Movie Details */}
        <div className="w-full h-full absolute top-[40%] left-0 ml-3 md:ml-16 flex flex-col gap-4 lg:gap-3 z-20">
          <p className="text-[28px] font-bold md:text-[38px] lg:text-[58px] drop-shadow-xl w-full md:w-[45%]">
            {movie?.name || movie?.original_name || movie?.title}
          </p>

          <p className="w-[80%] sm:w-[60%] lg:w-[40%] lg:text-[28px]">
            {truncate(movie?.overview, 150)}
          </p>

          <div className="flex flex-row items-center gap-3">
            <button className="bg-white text-black rounded-md py-2 md:py-3 px-3 md:px-6 w-auto text-sm sm:text-lg md:text-xl font-bold flex flex-row items-center hover:bg-opacity-90 transition">
              <FaPlay className="mr-2" /> Play
            </button>
            <button className="bg-white text-white bg-opacity-30 rounded-md py-2 md:py-3 px-3 md:px-4 w-auto text-sm sm:text-lg font-bold flex flex-row items-center hover:bg-opacity-20 transition">
              <Info className="mr-1" /> More Info
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;

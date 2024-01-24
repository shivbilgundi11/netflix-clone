/* eslint-disable react/prop-types */
import { FaPlay } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { GoPlus } from "react-icons/go";

const MovieCard = ({ movieData }) => {
  const bg_url = "https://image.tmdb.org/t/p/original";
  return (
    <div className="group bg-zinc-900 col-span aspect-video relative w-[190px] h-[96px] md:w-[240px] lg:w-[290px] md:h-[130px] lg:h-[164px]">
      <img
        src={`${bg_url}${movieData?.backdrop_path || movieData?.poster_path}`}
        alt="movie_poster"
        className="cursor-pointer block object-cover object-center transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-[190px] h-[96px] md:w-[240px] lg:w-[290px] md:h-[130px] lg:h-[164px]"
      />

      <div
        className="
        opacity-0
        absolute
        top-5
        md:top-10
        lg:top-20
        lg:left-10
        right-0
        transition
        duration-200
        z-10
        invisible
        sm:visible
        delay-300
        w-full
        scale-0
        group-hover:scale-125
        group-hover:-translate-y-[6vw]
        group-hover:-translate-x-[2vw]
        group-hover:opacity-100
      "
      >
        <img
          src={`${bg_url}${movieData?.backdrop_path || movieData?.poster_path}`}
          alt="Thumbnail"
          className="cursor-pointer object-cover transition aspect-video duration shadow-xl rounded-t-md w-full h-[100px] md:h-[140px] sm:h-[80px]"
        />

        <div className="z-10 bg-zinc-800 p-2 lg:p-3 absolute w-full transition shadow-md rounded-b-lg">
          <p className="text-xs md:text-sm lg:text-md mb-1 lg:mb-1">
            {movieData?.title || movieData?.name || movieData?.original_name}
          </p>

          <p className="text-[8px] md:text-sm text-slate-400 mb-2">
            {movieData?.release_date || movieData?.first_air_date}
          </p>
          <div className="flex flex-row items-center gap-3">
            <div
              className="cursor-pointer h-5 w-5 lg:w-8 lg:h-8 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
              onClick={() => {}}
            >
              <FaPlay className=" text-black text-xs" />
            </div>
            <div
              className="cursor-pointer h-5 w-5 lg:w-8 lg:h-8 border border-white rounded-full flex justify-center items-center transition"
              onClick={() => {}}
            >
              <GoPlus className="text-xs lg:text-lg" />
            </div>
            <div
              className="cursor-pointer h-5 w-5 lg:w-8 lg:h-8 border border-white rounded-full flex justify-center items-center transition"
              onClick={() => {}}
            >
              <SlLike className="text-xs lg:text-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

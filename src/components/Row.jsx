import axios from "../axios/axios";
import { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

// eslint-disable-next-line react/prop-types
const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [slideNum, setSlideNum] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  const sliderRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = sliderRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNum > 0) {
      setSlideNum(slideNum - 1);
      sliderRef.current.style.transform = `translateX(${297 + distance}px)`;
    }
    if (direction === "right" && slideNum < 15) {
      setSlideNum(slideNum + 1);
      sliderRef.current.style.transform = `translateX(${-297 + distance}px)`;
    }
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="w-full px-4 md:px-12 py-4 md:py-6 mb-16 mt-8 space-y-8">
      <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
        {title}
      </p>

      <div className="w-full relative">
        <ChevronLeft
          className={`${
            !isMoved ? "hidden" : "block"
          } absolute top-0 left-0 z-30 w-8 md:w-12 rounded-md bg-black opacity-50 cursor-pointer hover:scale-110 transition h-full`}
          onClick={() => handleClick("left")}
        />
        <div
          className="w-max flex gap-1 md:gap-2 justify-center -translate-x-0 transition duration-1000"
          ref={sliderRef}
        >
          {movies.map((movieData) => {
            return <MovieCard key={movieData.id} movieData={movieData} />;
          })}
        </div>
        <ChevronRight
          className="absolute top-0 right-0 z-9 w-8 md:w-12 rounded-md bg-black opacity-50 cursor-pointer hover:scale-110 transition h-full"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default Row;

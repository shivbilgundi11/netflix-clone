import Mobile from "../../assets/images/mobile-0819.jpg";
import Poster from "../../assets/images/boxshot.png";
import Downloading from "../../assets/images/download-icon.gif";

const Feature2 = () => {
  return (
    <section className="mt-2 py-10 md:py-10 bg-black">
      <div className="w-full md:max-container mx-auto px-4 py-4 md:p-8 h-full grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-y-12">
        {/* Col-1 */}
        <div className="text-center md:text-left md:order-2">
          <h2 className="text-[32px] md:text-4xl font-netflixBold font-bold mb-3">
            Download your shows to watch offline
          </h2>
          <p className="text-lg md:text-2xl">
            Save your favourites easily and always have something to watch.
          </p>
        </div>

        {/* Col-2 */}
        <div className="flex items-center justify-center relative md:order-1">
          <img src={Mobile} alt="tv-image" className="" />

          <div className="absolute z-1 w-[280px] h-[80px] sm:w-[340px] bottom-0 bg-black overflow-hidden sm:h-[100px] rounded-xl flex items-center justify-between border border-dark-gray p-2">
            <div className="flex gap-x-4 items-center justify-center">
              <img
                src={Poster}
                className="w-[45px] sm:w-[50px]"
                alt="stranger-things-poster"
              />

              <span>
                <p className="text-sm sm:text-lg">Stranger Things</p>
                <p className="text-sm sm:text-md text-blue-600">
                  Downloading...
                </p>
              </span>
            </div>

            <span className="w-[40px] sm:w-[50px]">
              <img src={Downloading} alt="downloading-gif" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature2;

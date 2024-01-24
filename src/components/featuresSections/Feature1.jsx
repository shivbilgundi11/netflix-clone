import TVImg from "../../assets/images/tv.png";
import TVVideo from "../../assets/images/video-tv-in-0819.mp4";

const Feature1 = () => {
  return (
    <section className="mt-2 py-10 md:py-10 bg-black">
      <div className="w-full md:max-container mx-auto px-4 py-4 md:p-8 h-full grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-y-12">
        {/* Col-1 */}
        <div className="text-center md:text-left">
          <h2 className="text-[32px] md:text-4xl font-netflixBold font-bold mb-4">
            Enjoy on your TV
          </h2>
          <p className="text-lg md:text-2xl">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>

        {/* Col-2 */}
        <div className="flex items-center justify-center relative">
          <img src={TVImg} alt="tv-image" className="z-10" />
          <div className="absolute z-0">
            <video src={TVVideo} autoPlay playsInline muted loop></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature1;

import MacImg from "../../assets/images/device-pile-in.png";
import DeviceAllVideo from "../../assets/images/video-devices-in.mp4";

const Feature3 = () => {
  return (
    <section className="mt-2 py-10 md:py-10 bg-black">
      <div className="w-full md:max-container mx-auto px-4 py-4 md:p-8 h-full grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-y-12">
        {/* Col-1 */}
        <div className="text-center md:text-left">
          <h2 className="text-[32px] md:text-4xl font-netflixBold font-bold mb-4">
            Watch everywhere
          </h2>
          <p className="text-lg md:text-2xl">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>

        {/* Col-2 */}
        <div className="flex items-center justify-center relative mx-auto max-w-[470px]">
          <img src={MacImg} alt="tv-image" className="z-10 w-full" />
          <div className="absolute z-0  overflow-hidden w-[65%] top-[35px]">
            <video src={DeviceAllVideo} autoPlay playsInline muted loop></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature3;

import Children from "../../assets/images/children.png";

const Feature4 = () => {
  return (
    <section className="mt-2 py-10 md:py-10 bg-black">
      <div className="w-full md:max-container mx-auto px-4 py-4 md:p-8 h-full grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-y-12">
        {/* Col-1 */}
        <div className="text-center md:text-left md:order-2">
          <h2 className="text-[32px] md:text-4xl font-netflixBold font-bold mb-3">
            Create profiles for kids
          </h2>
          <p className="text-lg md:text-2xl">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>

        {/* Col-2 */}
        <div className="flex items-center justify-center relative max-w-[470px] mx-auto">
          <img src={Children} alt="tv-image" className="" />
        </div>
      </div>
    </section>
  );
};

export default Feature4;

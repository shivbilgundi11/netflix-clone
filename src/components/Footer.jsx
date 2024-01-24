import LanguageDropDown from "./Language";
import "../index.css";

// eslint-disable-next-line react/prop-types
const Footer = ({ links, transparent }) => {
  return (
    <footer
      className={`py-10 px-6 md:py-10 bg-black ${
        transparent ? "sm:bg-[#00000066]" : "sm:bg-black"
      }`}
    >
      <div className="md:max-container">
        <p className="text-md font-thin font-netflixRg leading-snug text-white-400">
          Questions? Call{" "}
          <a href="#" className="underline">
            000-800-919-1694
          </a>
        </p>

        <div className="my-7 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {/* eslint-disable-next-line react/prop-types */}
          {links.map((link, id) => {
            return (
              <a
                href="#"
                className="text-sm underline font-thin font-netflixRg text-white-400"
                key={id}
              >
                {link}
              </a>
            );
          })}
        </div>

        <div>
          <LanguageDropDown />
        </div>

        <div className="text-sm text-white-400 font-netflixRg my-5">
          Netflix India
        </div>
      </div>
    </footer>
  );
};

export default Footer;

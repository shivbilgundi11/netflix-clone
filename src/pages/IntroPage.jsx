import { Link } from "react-router-dom";
import NetflixLogo from "../assets/images/Netflix_Logo_PMS.png";
import Feature1 from "../components/featuresSections/Feature1";
import Feature2 from "../components/featuresSections/Feature2";
import Feature3 from "../components/featuresSections/Feature3";
import Feature4 from "../components/featuresSections/Feature4";
import LanguageDropDown from "../components/Language";
import Faq from "../components/FAQ";
import EmailForm from "../components/EmailForm";
import Footer from "../components/Footer";
import { links } from "../constants/resource";

const IntroPage = () => {
  return (
    <>
      <header className="w-full h-[510px] md:h-[710px] bg-gradient bg-cover bg-center flex flex-col justify-between">
        {/* NavBar For Intro Page... */}
        <nav className="max-container flex items-center justify-between px-4 py-3 md:px-8 md:py-2">
          <Link to="/" className="w-[110px] md:w-[190px]">
            <img
              src={NetflixLogo}
              alt="Netflix-Logo"
              className="w-full block"
            />
          </Link>

          <div className="cta flex items-center justify-center gap-x-2">
            <LanguageDropDown />
            <Link to="/login" className="btn-primary text-sm">
              Sign In
            </Link>
          </div>
        </nav>

        {/* Hero Section... */}
        <div className="max-container h-full mx-auto flex flex-col gap-y-4 sm:gap-y-5 md:gap-y-6 text-center justify-center items-center">
          <h1 className="text-[32px] md:text-4xl font-netflixBold max-w-[350px] sm:max-w-none">
            Enjoy big movies, hit series and more from &#8377;149.
          </h1>

          <p className="text-lg md:text-2xl font-netflixRg">
            Join today. Cancel anytime.
          </p>
          <p className="text-sm md:text-xl font-netflixRg">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <EmailForm />
        </div>
      </header>

      {/* Feature1-Section */}
      <Feature1 />
      {/* Feature2-Section */}
      <Feature2 />
      {/* Feature3-Section */}
      <Feature3 />
      {/* Feature4-Section */}
      <Feature4 />

      {/* FAQ Section... */}
      <Faq />

      {/* Footer-Section */}
      <Footer links={links} transparent={false} />
    </>
  );
};

export default IntroPage;

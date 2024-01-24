import { Outlet } from "react-router-dom";
import Logo from "../assets/images/Netflix_Logo_PMS.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const links = [
  "FAQ",
  "Help Centre",
  "Cookie Preference",
  "Privacy",
  "Terms of Use",
  "Corporate Information",
];

const Authentication = () => {
  return (
    <>
      <main className="w-full bg-gradient2 bg-cover bg-center bg-no-repeat">
        <header className="w-full h-[60px] sm:h-[100px] flex items-center bg-black sm:bg-transparent">
          <nav className="">
            <Link to="/">
              <img
                src={Logo}
                alt="Logo"
                className="block w-[125px] sm:w-[220px] md:m-6 md:ml-10 md:w-[210px]"
              />
            </Link>
          </nav>
        </header>

        <Outlet />

        <Footer links={links} transparent={true} />
      </main>
    </>
  );
};

export default Authentication;

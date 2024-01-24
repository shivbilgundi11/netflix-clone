import { Bell, ChevronDown, Search } from "lucide-react";
import NavbarItem from "./NavbarItem";
import MobileMenu from "./MobileMenu";
import { useCallback, useEffect, useState } from "react";
import AccountMenu from "./AccountMenu";
import Logo from '../assets/images/Netflix_Logo_PMS.png'
import Avatar from '../assets/images/avatar.png'

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setshowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setshowBackground(true);
      } else {
        setshowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((curr) => !curr);
  }, []);
  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((curr) => !curr);
  }, []);

  return (
    <nav className="w-full fixed z-50">
      <div
        className={`px-4 md:px-16 py-2 flex flex-row items-center transition duration-500 ${
          showBackground ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        <img src={Logo} alt="Log" className="h-8 lg:h-12" />

        <div className="flex-row ml-4 gap-6 hidden lg:flex">
          <NavbarItem label="Home" />
          <NavbarItem label="TV Shows" />
          <NavbarItem label="Movies" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by Languages" />
        </div>

        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-2 md:ml-6 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <ChevronDown
            className={`text-white transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />

          <MobileMenu visible={showMobileMenu} />
        </div>

        <div className="flex flex-row ml-auto gap-3 lg:gap-5 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <Search />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <Bell />
          </div>

          <div
            onClick={toggleAccountMenu}
            className="flex flex-row items-center gap-1 cursor-pointer relative"
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img
                src={Avatar}
                className="w-full"
                alt="avatar"
              />
            </div>
            <ChevronDown
              className={`text-white transition ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

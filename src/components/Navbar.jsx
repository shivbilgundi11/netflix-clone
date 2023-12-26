import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Netflix_Logo_PMS.png";
import { Bell, Search } from "lucide-react";
import Avatar from "../assets/avatar.png";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/firebase";
import { logout } from "../app/features/userSlice";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [searchWidth, setSearchWidth] = useState(false);
  const searchBar = useRef(null);

  const handleCLick = () => {
    setSearchWidth(!searchWidth);
    searchBar.current.focus();
  };

  // const user = useSelector(state => state.user);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout())
    signOut(auth)
  };

  return (
    <nav className="w-full h-16 px-2 sm:px-7 flex items-center justify-between">
      <div className="flex items-center justify-between gap-x-4">
        <Link to={"/browse"} className="">
          <img src={Logo} alt="logo" className="block w-[80px] sm:w-[120px]" />
        </Link>

        <div className="flex items-center justify-between gap-x-4 text-sm text-white-400 font-thin">
          <NavLink to="/browse">Home</NavLink>
          <NavLink to="/browse">TV Shows</NavLink>
          <NavLink to="/browse">Movies</NavLink>
          <NavLink to="/browse">New & Popular</NavLink>
          <NavLink to="/">My List</NavLink>
          <NavLink to="#">Browse by Languages</NavLink>
        </div>
      </div>

      <div className="flex items-center justify-between gap-x-4">
        <div className="flex relative">
          <Search
            className="cursor-pointer absolute text-xs top-1 left-1"
            onClick={handleCLick}
          />
          <input
            type="text"
            ref={searchBar}
            placeholder="Titles,people,genres"
            className={`py-[4px] pl-8 rounded email-bg text-white border border-white-400 placeholder:text-xs
              ${
                searchWidth ? "w-full" : "w-0"
              }  transition-all duration-300 ease-in`}
            onBlur={() => {
              setSearchWidth(false);
            }}
          />
        </div>
        <button className="cursor-not-allowed hidden sm:block">
          <Bell />
        </button>

        <Link className="hidden md:block">
          <img src={Avatar} alt="profile logo" className="rounded" onClick={handleLogout} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

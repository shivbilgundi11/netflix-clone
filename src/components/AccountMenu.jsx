import { useDispatch } from "react-redux";
import { logout } from "../app/features/userSlice";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const AccountMenu = ({ visible }) => {
  const [userName, setUserName] = useState("");

  const user = useSelector((state) => state?.user?.user?.email);

  const dispatch = useDispatch();

  const handleSignout = () => {
    dispatch(logout);
    signOut(auth);
  };

  useEffect(() => {
    setUserName(user);
  }, [user]);

  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-12 right-0 py-4 flex-col rounded-xl border-2 border-gray-800 flex">
      <div className="flex flex-col">
        <div className="px-3 group/item flex flex-row gap-3 ml-2 items-center w-full">
          <img
            src="/src/assets/images/avatar.png"
            alt="avatar"
            className="w-8 rounded-md"
          />
          <p className="text-white text-sm group-hover/item:underline">
            {userName && userName.split("@")[0]}
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <div
          onClick={handleSignout}
          className=" text-center flex align-middle justify-center text-white text-sm hover:underline"
        >
          Sign out of Netflix
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;

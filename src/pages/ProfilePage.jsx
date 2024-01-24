import { useNavigate } from "react-router-dom";
import Avatar from "../assets/images/profile.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();

  const routeToBRowse = () => {
    navigate("/browse");
  };

  const user = useSelector((state) => state?.user?.user?.email);

  useEffect(() => {
    setUserName(user);
  }, [user]);

  return (
    <section className="w-full h-[100vh] bg-[#141414] flex flex-col justify-center items-center gap-3">
      <h1 className="text-[24px] sm:text-[32px] md:text-[42px] lg:text-[67px]">
        {"Who's watching"}
      </h1>

      <div
        className="w-[84px] h-[84px] sm:w-[120px] sm:h-[120px] md:w-[190px] md:h-[190px] rounded-md overflow-hidden cursor-pointer hover:border-2"
        onClick={routeToBRowse}
      >
        <img
          src={Avatar}
          alt="profile_icon"
          className="block w-full object-cover object-center"
        />
      </div>

      <p className="text-[18px] sm:text-[22px] md:text-[28px] text-white-400">
        {userName && userName.split("@")[0]}
      </p>
    </section>
  );
};

export default ProfilePage;

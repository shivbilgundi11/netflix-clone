import { useEffect } from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  useEffect(() => {
    window.document.title = "Home - Netflix";
  });

  return (
    <>
      <header className="w-full h-full">
        <Navbar />
      </header>
    </>
  );
};

export default Home;

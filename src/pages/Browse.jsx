import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Row from "../components/Row";
import requests from "../axios/requests";
import Footer from "../components/Footer";
import { links } from "../constants/resource";

const Browse = () => {
  useEffect(() => {
    window.document.title = "Home - Netflix";
  });

  return (
    <>
      {/* Navbar */}
      <section className="w-full bg-[#141414] overflow-hidden">
        <Navbar />
        {/* Banner */}
        <Banner />
        {/* Row-1 */}
        <Row
          title={"Netflix Originals"}
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />

        <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
        <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
        <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
        <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
        <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
        <Row title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies} />
        <Row title={"Documentaries"} fetchUrl={requests.fetchDocumentaries} />
      </section>

      <Footer links={links} transparent={false} />
    </>
  );
};

export default Browse;

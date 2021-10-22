import React from "react";
import Contact from "../../components/Contact/Contact";
import Team from "../../components/HomePage/Team/Team";
import Work from "../../components/HomePage/Work/Work";
import Portfolio from "../../components/HomePage/Portfolio/Portfolio";
import HomeIntroduce from "../../components/Introduce/HomeIntroduce/HomeIntroduce";
// import Price from "../../components/HomePage/Price/Price";
import Header from "../../components/Layout/Header/Header";
import audioT from "../../images/Tirailleur.mp3";
const Home = () => {
  return (
    <>
      <audio id="myaudio">
        <source src={audioT} type="audio/ogg" />
        Your browser does not support the audio tag.
      </audio>
      <Header />
      <HomeIntroduce />
      <Work />
      <Team />
      <Portfolio />
      {/* <Price /> */}
      <Contact />
    </>
  );
};
export default Home;

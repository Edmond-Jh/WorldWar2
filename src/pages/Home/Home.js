import React from "react";
import Contact from "../../components/Contact/Contact";
import Generals from "../../components/HomePage/Team/Generals";
import Wars from "../../components/HomePage/Work/Wars";
import Sides from "../../components/HomePage/Portfolio/Sides";
import HomeIntroduce from "../../components/Introduce/HomeIntroduce/HomeIntroduce";
import Header from "../../components/Layout/Header/Header";
import audioT from "../../images/Tirailleur.mp3";
const Home = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <audio id="myaudio">
        <source src={audioT} type="audio/ogg" />
        Your browser does not support the audio tag.
      </audio>
      <Header />
      <HomeIntroduce />
      <Wars />
      <Generals />
      <Sides />
      <Contact />
    </>
  );
};
export default Home;

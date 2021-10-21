import React from "react";
// import videoBg from "../../../images/BgVideo.mp4";
const Header = () => {
  function playAudio() {
    let audio = document.getElementById("myaudio");
    audio.volume = 0.3;
    audio.play();
  }

  return (
    <>
      <section id="home">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <h2 className="wow bounceInDown rotate">Historical</h2>
              <h1 className="wow bounce">World War 2</h1>
              <a
                href="#intro"
                id="getStarted"
                className="btn btn-default smoothScroll"
                onClick={playAudio}
              >
                GET START!
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;

import React from "react";
import aboutww2 from "../../../images/aboutww2.mp4";
const HomeIntroduce = () => {
  function funcstop(e) {
    let audio = document.getElementById("myaudio");
    audio.pause();
  }
  return (
    <>
      <section id="intro">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 title">
              <h4 className="welcomer">Welcome To Greate History</h4>
              <h2>جنگ جهانی دوم</h2>
              <hr />
              <p>
                جنگ جهانی دوم دومین جنگ جهانی بین سال‌های ۱۹۳۹ تا ۱۹۴۵ بود که
                بیشتر کشورهای جهان از جمله قدرت‌های بزرگ در آن دخیل شدند.
                نیروهای تقابل‌گر در قالب دو اتحاد نظامی در برابر هم قرار گرفتند
                و با این دو اتحاد نظامی، یک جنگ تمام‌عیار به راه انداختند که در
                اثر آن، بیش از صد میلیون نفر در بیش از ۳۰ کشور جهان درگیر شدند
              </p>
              <video
                width="700"
                controls
                className="headvideo"
                onPlay={funcstop}
                // onPause={fpause}
              >
                <source src={aboutww2} type="video/mp4" />
                Your browser does not support HTML video.
              </video>
              <h3>خلاصه ی علت وقوع جنگ</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeIntroduce;

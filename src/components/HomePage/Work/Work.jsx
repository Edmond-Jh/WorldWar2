import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import contentful from "../../../Helpers/contentful";
import gif from "../../../images/gif1.gif";
import gifimg from "../../../images/gif1.jpg";

import gif2 from "../../../images/gif2.gif";
import gifimg2 from "../../../images/gif2.jpg";

import gif3 from "../../../images/gif3.gif";
import gifimg3 from "../../../images/gif3.jpg";

import gif4 from "../../../images/gif4.gif";
import gifimg4 from "../../../images/gif4.jpg";
const Work = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    contentful
      .getEntries({
        content_type: "wars",
        limit: 4,
      })
      .then((result) => setData(result.items));
  }, []);
  let index1;
  let index2;
  let index3;
  let index4;
  if (data) {
    index1 = data[0];
    index2 = data[1];
    index3 = data[2];
    index4 = data[3];
  }

  return (
    <>
      <section id="work">
        <div className="container">
          <div className="row ">
            <div className="col-md-4 col-sm-4 title battlecards">
              <h2>نبردها</h2>
              <hr />
              <p>
                در جنگ جهانی دوم عملیات های و نبرد های بسیار مهم و سرنوشت سازی
                صورت گرفت در این بخش میتوانید در مورد چندین نبرد از مهمترین نبرد
                های جنگ جهانی دوم مطالعه کنید
              </p>
            </div>

            <div className="col-md-8 col-sm-8">
              <div className="col-md-6 col-sm-6 bg-red p-0 gif-cont ">
                <a href="/">
                  <figure>
                    <img className="static" src={gifimg} />
                    <img className="active" src={gif} />
                  </figure>
                  <div></div>
                  <span>{index1?.fields.title}</span>
                </a>
              </div>
              <div className="col-md-6 col-sm-6 bg-black gif-cont ">
                <Link to={`/war/`}>
                  <figure>
                    <img className="static" src={gifimg2} />
                    <img className="active" src={gif2} />
                  </figure>
                  <div></div>
                  <span>{index2?.fields.title}</span>
                </Link>
              </div>
              <div className="col-md-6 col-sm-6 bg-black gif-cont ">
                <a href="/">
                  <figure>
                    <img className="static" src={gifimg3} />
                    <img className="active" src={gif3} />
                  </figure>
                  <div></div>
                  <span>{index3?.fields.title}</span>
                </a>
              </div>
              <div className="col-md-6 col-sm-6 bg-red gif-cont ">
                <a href="/">
                  <figure>
                    <img className="static" src={gifimg4} />
                    <img className="active" src={gif4} />
                  </figure>
                  <div></div>
                  <span>{index4?.fields.title}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Work;

import React, { useState, useEffect } from "react";
import contentful from "../../../Helpers/contentful";
import "./Team.scss";
const Team = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    contentful
      .getEntries({
        content_type: "general",
      })
      .then((result) => setData(result.items));
  }, []);

  const dwait = data?.find((data) => data.fields.name === "دوایت آیزنهاور");
  const manstein = data?.find(
    (data) => data.fields.name === "اریش فن مانشتاین"
  );
  const zhokov = data?.find((data) => data.fields.name === "گئورگی ژوکوف");

  return (
    <>
      <section id="team">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8 title">
              <h2>ژنرال ها</h2>
              <hr />
              <p>
                در این بخش با بزرگترین و پر افتخار ترین ژنرال هااز قدرتمند ترین
                کشور های حاضر در جنگ جهانی دوم آشنا خواهیم شد
              </p>
            </div>

            <div className="card-wrapper col-md-4 col-sm-4 col-xs-6 wow fadeIn">
              <div className="card">
                <div className="card-images">
                  <div className="headcard">
                    <div className="headcardchild">
                      <p>{manstein?.fields.Nationality.fields?.name}</p>
                    </div>
                  </div>
                  <img
                    src={manstein?.fields.gernealpicture[0].fields.file.url}
                    alt="profile one"
                  />
                </div>

                <div className="details">
                  <h2>{manstein?.fields.name}</h2>
                  <h3>رنکینگ نظامی: {manstein?.fields.ranking}</h3>
                </div>
              </div>
            </div>

            <div className="card-wrapper col-md-4 col-sm-4 col-xs-6 wow fadeIn">
              <div className="card">
                <div className="card-images">
                  <div className="headcard">
                    <div className="headcardchild">
                      <p>{dwait?.fields.Nationality.fields?.name}</p>
                    </div>
                  </div>
                  <img
                    src={dwait?.fields.gernealpicture[0].fields.file.url}
                    alt="profile one"
                  />
                </div>

                <div className="details">
                  <h2>{dwait?.fields.name}</h2>
                  <h3>رنکینگ نظامی: {dwait?.fields.ranking}</h3>
                </div>
              </div>
            </div>

            <div className="card-wrapper col-md-4 col-sm-4 col-xs-6 wow fadeIn">
              <div className="card">
                <div className="card-images">
                  <div className="headcard">
                    <div className="headcardchild">
                      <p>{zhokov?.fields.Nationality.fields.name}</p>
                    </div>
                  </div>
                  <img
                    src={zhokov?.fields.gernealpicture[0].fields.file.url}
                    alt="profile one"
                  />
                </div>

                <div className="details">
                  <h2>{zhokov?.fields.name}</h2>
                  <h3>رنکینگ نظامی: {zhokov?.fields.ranking}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Team;

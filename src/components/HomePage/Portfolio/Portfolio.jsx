import React, { useState, useEffect } from "react";
import contentful from "../../../Helpers/contentful";
const Portfolio = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    contentful
      .getEntries({
        content_type: "side",
      })
      .then((result) => setData(result.items));
  }, []);

  const allies = data?.filter((data) => data.fields.sidename === "متفقین");
  const axis = data?.filter((data) => data.fields.sidename === "متحدین");
  let th4Allies;
  let th4Axis;
  if (data) {
    th4Allies = allies[0];
    th4Axis = axis[0];
  }
  th4Allies = th4Allies?.fields.sidecountry.slice(0, 4);
  th4Axis = th4Axis?.fields.sidecountry.slice(0, 4);

  return (
    <>
      <div id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8 title">
              <h2>طرفین حاضر</h2>
              <hr />
              <p>
                در این بخش چند کشور از قدر های بزرگ جنگ جهانی دوم را معرفی
                میکنیم
              </p>
            </div>

            <div className="col-md-12 col-sm-12"></div>
            <p
              style={{ fontSize: "35px", fontFamily: "Mmdreg" }}
              className="col-md-12"
            >
              متحدین
            </p>
            {th4Allies?.map((data) => {
              return (
                <div
                  key={data.fields.name}
                  className="col-md-3 col-sm-3 wow fadeIn"
                  data-wow-delay="0.6s"
                >
                  <a
                    href="images/portfolio-img1.jpg"
                    data-lightbox-gallery="portfolio-gallery"
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "148px",
                        objectFit: "cover",
                      }}
                      src={data?.fields.flag.fields.file.url}
                      alt="portfolio img"
                    />
                  </a>
                </div>
              );
            })}

            <p
              className="col-md-12"
              style={{ fontSize: "35px", fontFamily: "Mmdreg" }}
            >
              متفقین
            </p>
            {th4Axis?.map((data) => {
              return (
                <div
                  key={data.fields.name}
                  className="col-md-3 col-sm-3 wow fadeIn"
                  data-wow-delay="0.6s"
                >
                  <a
                    href="images/portfolio-img1.jpg"
                    data-lightbox-gallery="portfolio-gallery"
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "148px",
                        objectFit: "cover",
                      }}
                      src={data?.fields.flag.fields.file.url}
                      alt="portfolio img"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Portfolio;

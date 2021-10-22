import React, { useState, useEffect } from "react";
import contentful from "../../../Helpers/contentful";
import "./Sides.css";
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
              style={{
                fontSize: "35px",
                fontFamily: "Mmdreg",
                margin: "30px 0px",
              }}
              className="col-md-12"
            >
              متفقین
            </p>
            <div class="col-md-12 col-sm-12 wow fadeIn">
              {th4Allies?.map((data) => {
                return (
                  <div
                    class="cardak col-md-3 col-sm-3 wow fadeIn"
                    key={data.fields.name}
                  >
                    <img src={data?.fields.flag.fields.file.url} />
                    <div class="info">
                      <h3>{data.fields.name}</h3>

                      <button>Read More</button>
                    </div>
                  </div>
                );
              })}
            </div>
            <p
              className="col-md-12"
              style={{
                fontSize: "35px",
                fontFamily: "Mmdreg",
                margin: "30px 0px",
              }}
            >
              متحدین
            </p>
            {th4Axis?.map((data) => {
              console.log(data);
              return (
                <div
                  class="cardak col-md-3 col-sm-3 wow fadeIn"
                  key={data.fields.name}
                >
                  <img
                    src={data?.fields.flag.fields.file.url}
                    style={{ objectFit: "cover" }}
                  />
                  <div class="info">
                    <h3>{data.fields.name}</h3>

                    <button>بیشتر بدانید</button>
                  </div>
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

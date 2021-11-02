import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import contentful from "../../../Helpers/contentful";
import "./Sides.css";
const Sides = () => {
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
    th4Allies = allies[0].fields.sidecountry.slice(0, 4);
    th4Axis = axis[0].fields.sidecountry.slice(0, 4);
  }
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
            <div className="col-md-12 col-sm-12 wow fadeIn">
              {th4Allies?.map((data) => {
                return (
                  <div
                    className="cardak col-md-3 col-sm-3 wow fadeIn"
                    key={data.fields.name}
                  >
                    <img src={data?.fields.flag.fields.file.url} />
                    <div className="info">
                      <h3>{data.fields.name}</h3>
                      <Link to={`/countries/${data?.sys.id}`}>
                        <button>Read More</button>
                      </Link>
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
              return (
                <div
                  className="cardak col-md-3 col-sm-3 wow fadeIn"
                  key={data.fields.name}
                >
                  <img
                    src={data?.fields.flag.fields.file.url}
                    style={{ objectFit: "cover" }}
                  />
                  <div className="info">
                    <h3>{data.fields.name}</h3>

                    <Link to={`/countries/${data?.sys.id}`}>
                      <button>Read More</button>
                    </Link>
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
export default Sides;

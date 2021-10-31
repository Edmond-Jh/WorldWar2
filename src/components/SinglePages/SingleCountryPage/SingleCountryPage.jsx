import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import contentful from "../../../Helpers/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Link } from "react-router-dom";
import "./SignleGeneral.css";
import "./GeneralPage.scss";
const SingleCountryPage = () => {
  const [data, setData] = useState(null);
  const params = useParams();
  useEffect(() => {
    contentful.getEntry(`${params.id}`).then(setData);
  }, []);
  window.scrollTo(0, 0);

  return (
    <div className="Generals-main">
      <div className="col-md-12 g-title">
        <h1>{data?.fields.name}</h1>
      </div>
      <div className="col-md-12">
        <div className="col-md-12 g-s-image">
          <div className="card-wrappers col-md-12">
            <div className="Count-card-imagesc">
              <div className="Count-card-images">
                <div className="headcards">
                  <div className="headcardchilds">
                    <p>پرچم</p>
                  </div>
                </div>
                <img src={data?.fields.flag.fields.file.url} />
                <div className="footercard">
                  <div className="footercardchilds">
                    <p>{data?.fields.side.fields.sidename}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 g-d-desc">
          <p>
            <span>درباره ی کشور</span>
            {!data?.fields.aboutgenerals ? (
              <div style={{ backgroundColor: "red" }}>No Data</div>
            ) : (
              <div></div>
            )}
            <div
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(data?.fields.aboutgenerals),
              }}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCountryPage;

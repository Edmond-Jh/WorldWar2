import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import contentful from "../../../Helpers/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Link } from "react-router-dom";
import "./SignleGeneral.css";
import "./GeneralPage.scss";
const SingleGeneralPage = () => {
  const [data, setData] = useState(null);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    contentful.getEntry(`${params.id}`).then(setData);
  }, []);
  if (data) {
    console.log(data);
  }
  return (
    <div className="Generals-main">
      <div className="col-md-12 g-title">
        <h1>{data?.fields.name}</h1>
      </div>
      <div className="col-md-12">
        <div className="col-md-4 g-s-image">
          <div className="card-wrappers col-md-12">
            <div className="cards">
              <div className="card-imagess">
                <div className="headcards">
                  <div className="headcardchilds">
                    <p>{data?.fields.birthdathe}</p>
                  </div>
                </div>
                <img src={data?.fields.gernealpicture[0].fields.file.url} />
                <div className="footercard">
                  <div className="footercardchilds">
                    <p>{data?.fields.ranking}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="country col-md-12 card-wrappers2 ">
            <Link to={`/country/${data?.fields.Nationality.sys.id}`}>
              <div className="cards2">
                <div className="card-imagess2">
                  <div className="footercard">
                    <div className="footercardchilds">
                      <p>{data?.fields.Nationality.fields.name}</p>
                    </div>
                  </div>
                  <div className="headcards">
                    <div className="headcardchilds">
                      <p>ملیت</p>
                    </div>
                  </div>
                  <img
                    src={data?.fields.Nationality.fields.flag.fields.file.url}
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-md-8 g-d-desc">
          <p>
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

export default SingleGeneralPage;

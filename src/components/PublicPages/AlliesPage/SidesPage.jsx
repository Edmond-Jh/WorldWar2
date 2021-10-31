import React, { useEffect, useState } from "react";
import "./SidePage.css";
import contentful from "../../../Helpers/contentful";

import { Link } from "react-router-dom";

const SidesPage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    contentful
      .getEntries({
        content_type: "side",
      })
      .then(setData);
  }, []);

  return (
    <>
      <div className="col-md-12">
        <div className="col-md-1"></div>
        {data?.items.map((data) => {
          return (
            <Link to={`/Sides/${data?.sys.id}`} key={data?.fields.sidename}>
              <div className="sectionOne col-md-5" style={{ padding: "0" }}>
                <p>{data?.fields.sidename}</p>
                <img src={data?.fields.image.fields.file.url} />
              </div>
            </Link>
          );
        })}

        <div className="col-md-1"></div>
      </div>
    </>
  );
};
export default SidesPage;

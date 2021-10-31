import React, { useEffect, useState } from "react";
import Classes from "./Countries.module.scss";
import contentful from "../../../Helpers/contentful";

import { Link } from "react-router-dom";
import { Col, Row } from "antd";
const CountriesPage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    contentful
      .getEntries({
        content_type: "country",
      })
      .then(setData);
  }, []);

  return (
    <>
      <section className={Classes.WarCardSEC}>
        <Row style={{ paddingTop: "20px" }}>
          {!data ? (
            <h1>Loading...</h1>
          ) : (
            data?.items.map((r) => (
              <Col md={8} sm={8} key={r.fields.name}>
                <div className={Classes.WarCard}>
                  <div className={Classes.BGCardPic}>
                    <img
                      src={r.fields.flag.fields.file.url}
                      alt=""
                      width="100%"
                      style={{
                        maxHeight: "220px",
                        backgroundPosition: "center",
                        // backgroundSize: "cover",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className={Classes.history}>
                    <div className={Classes.historyMark}>
                      <p>{r.fields.name}</p>
                    </div>
                  </div>
                  <div className={Classes.CardBTN}>
                    <Link to={`countries/${r.sys.id}`}>
                      <button>...بیشتر بدانیم</button>
                    </Link>
                  </div>
                </div>
              </Col>
            ))
          )}
        </Row>
      </section>
    </>
  );
};

export default CountriesPage;

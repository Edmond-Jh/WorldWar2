import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import Classes from "./WarsPage.module.scss";
import contentful from "../../../Helpers/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Link } from "react-router-dom";
const WarsPage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    contentful
      .getEntries({
        content_type: "wars",
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
            data.items.map((r) => (
              <Col md={8} sm={8} key={r.fields.title}>
                <div className={Classes.WarCard}>
                  <div className={Classes.BGCardPic}>
                    <img
                      src={r.fields.image.fields.file.url}
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
                      <p>{r.fields.date}</p>
                    </div>
                  </div>
                  <div className={Classes.CardTitle}>
                    <h2>{r.fields.title}</h2>
                  </div>
                  <div className={Classes.DescriptionCard}>
                    <p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: documentToHtmlString(r.fields.desc),
                        }}
                      />
                    </p>
                  </div>
                  <div className={Classes.CardBTN}>
                    <Link to={`/wars/${r.sys.id}`}>
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

export default WarsPage;

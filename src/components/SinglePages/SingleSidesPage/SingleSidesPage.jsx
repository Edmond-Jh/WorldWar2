import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Classes from "./SidesPage.module.scss";
import contentful from "../../../Helpers/contentful";
import { Link } from "react-router-dom";
const SingleSidesPage = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    contentful.getEntry(`${id}`).then(setData);
  }, []);

  return (
    <section className={Classes.WarCardSEC}>
      <Row style={{ paddingTop: "20px" }}>
        {!data ? (
          <h1>Loading...</h1>
        ) : (
          data?.fields.sidecountry.map((data) => (
            <Col md={8} sm={8} key={data.fields.name}>
              <div className={Classes.WarCard}>
                <div className={Classes.BGCardPic}>
                  <img
                    src={data.fields.flag.fields.file.url}
                    alt=""
                    width="100%"
                    style={{
                      maxHeight: "220px",
                      backgroundPosition: "center",

                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className={Classes.history}>
                  <div className={Classes.historyMark}>
                    <p>{data.fields.name}</p>
                  </div>
                </div>
                <div className={Classes.CardBTN}>
                  <Link to={`countries/${data.sys.id}`}>
                    <button>...بیشتر بدانیم</button>
                  </Link>
                </div>
              </div>
            </Col>
          ))
        )}
      </Row>
    </section>
  );
};

export default SingleSidesPage;

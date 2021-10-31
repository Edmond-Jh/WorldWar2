import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
// Contentful
import contentful from "../../../Helpers/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
// Scss
import Classes from "./SingleWarPage.module.scss";
import { Link } from "react-router-dom";
import "./SingleWar.css";
SwiperCore.use([Navigation, Pagination, Autoplay]);
const SingleWarPage = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    contentful.getEntry(`${id}`).then(setData);
  }, []);
  window.scrollTo(0, 0);

  return (
    <>
      <section className="WarSingleHeader col-md-12">
        <div className="HeaderTitle col-md-12">
          <h1>{data?.fields.title}</h1>
        </div>
        <div className="col-md-9 description">
          <div
            className="col-md-12"
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(data?.fields.desc),
            }}
          />
          <div className="col-md-12">
            {data ? (
              data.fields.battlepic?.slice(0, 4).map((bp) => (
                <div className="WarImg col-md-4" key={bp.fields.file.url}>
                  <img
                    src={bp.fields.file.url}
                    alt=""
                    style={{ width: "100%", maxHeight: "250px" }}
                  />
                </div>
              ))
            ) : (
              <h5>No anymore Picture to show..</h5>
            )}
          </div>
        </div>

        <div className="col-md-3 shortdesc">
          <div className="ImgSection col-md-12">
            <img src={data?.fields.image.fields.file.url} />
          </div>

          <div className="Casulties col-md-12">
            <span className="Title">تلفات</span>
            {data?.fields.casulties
              ? data?.fields.casulties.map((data) => {
                  return (
                    <div key={data.fields.countries}>
                      <span>
                        <br />
                        <span
                          style={{
                            fontFamily: "MmdReg",
                            fontSize: "15px",
                            color: "white",
                          }}
                        >
                          {data.fields.countries}
                        </span>
                        {"  "}:{"  "}
                        <span style={{ color: "red" }}>
                          {data.fields.casultie}
                        </span>
                      </span>
                    </div>
                  );
                })
              : " No Data"}
          </div>
          <div className="Forces col-md-12">
            <span className="Title">تعداد سربازها </span>
            {data?.fields.forces ? (
              data.fields.forces.map((sold) => (
                <span className={Classes.SoldSec} key={sold.fields.countryname}>
                  <br />
                  <span
                    style={{
                      fontFamily: "MmdReg",
                      fontSize: "15px",
                      color: "white",
                    }}
                  >
                    {sold.fields.countryname}
                  </span>
                  {"  "}:{"  "}
                  <span style={{ color: "green" }}>{sold.fields.forces}</span>
                </span>
              ))
            ) : (
              <span className={Classes.SoldSec}>No data</span>
            )}
          </div>
          <div className="GeneralsCount col-md-12">
            <span className="Title">تعداد ژنرال ها :</span>{" "}
            {data?.fields.generals?.length ? (
              <span style={{ color: "Red", fontSize: "18px" }}>
                {data?.fields.generals?.length}
              </span>
            ) : (
              <div>No Data</div>
            )}
          </div>
          <div className="WarDates col-md-12">
            <span className="Title">تاریخ نبرد :</span>
            {data?.fields.date ? (
              <span className="Date">{data?.fields.date}</span>
            ) : (
              <div>No Data</div>
            )}
          </div>
          <div className="countriesCount col-md-12">
            <span className="Title">تعداد کشورهای حاضر :</span>{" "}
            {data?.fields.countries?.length ? (
              <span style={{ color: "red", fontSize: "18px" }}>
                {" "}
                {data?.fields.countries?.length}
              </span>
            ) : (
              <div>No Data</div>
            )}
          </div>
        </div>
      </section>

      <section className="col-md-12">
        <section className={`${Classes.Generals} col-md-8`}>
          <h3 style={{ fontFamily: "MmdBold" }}>ژنرال ها</h3>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={true}
            autoplay={{
              delay: "2000",
            }}
            className="mySwiper"
          >
            {data?.fields.generals ? (
              data.fields.generals.map((gen) => (
                <SwiperSlide
                  style={{ width: "600px", backgroundColor: "#202020" }}
                  key={gen.sys.id}
                >
                  <Link to={`/generals/${gen.sys.id}`}>
                    <div
                      className={Classes.SwiperPic}
                      style={{ width: "600px", backgroundColor: "#202020" }}
                    >
                      <p
                        style={{
                          fontFamily: "MmdBold",
                          color: "black",
                          backgroundColor: "white",
                          display: "inline",
                          fontSize: "20px",
                          marginRight: "30px",
                        }}
                      >
                        {gen.fields ? gen.fields.name : ""}
                      </p>
                      <img
                        src={
                          gen.fields
                            ? gen.fields.gernealpicture
                                .slice(0, 1)
                                .map((pic) => pic.fields.file.url)
                            : ""
                        }
                        alt=""
                        style={{
                          // Width: "400px",
                          // Height: "400px",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          border: "1px solid black",
                          borderRadius: "10px",
                        }}
                      />
                    </div>
                  </Link>
                </SwiperSlide>
              ))
            ) : (
              <h4>No Data</h4>
            )}
          </Swiper>
        </section>
        <section className={`${Classes.Countries} col-md-4`}>
          <h3 style={{ fontFamily: "MmdBold" }}>کشور های درگیر</h3>
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            navigation={true}
            pagination={true}
            autoplay={{
              delay: "3000",
            }}
            className="mySwiper"
          >
            {data?.fields.countries ? (
              data.fields.countries.map((count) => (
                <SwiperSlide
                  key={count.sys.id}
                  style={{ background: "#202020" }}
                >
                  <Link to={`/countries/${count.sys.id}`}>
                    <div className={Classes.SwiperPic}>
                      <img
                        src={count.fields.flag.fields.file.url}
                        alt=""
                        style={{
                          width: "100%",
                          maxHeight: "200px",
                          backgroundSize: "cover",
                        }}
                      />
                    </div>
                    <br />
                  </Link>
                </SwiperSlide>
              ))
            ) : (
              <h2>No Data</h2>
            )}
          </Swiper>
        </section>
      </section>
    </>
  );
};

export default SingleWarPage;

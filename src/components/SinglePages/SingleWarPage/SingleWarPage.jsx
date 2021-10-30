import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Classes from "./SingleWarPage.module.scss";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import contentful from "../../../Helpers/contentful";

SwiperCore.use([Navigation, Pagination, Autoplay]);
const SingleWarPage = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    contentful.getEntry(`${id}`).then(setData);
  }, []);
  console.log(data);
  return (
    <>
      <section className={Classes.WarSection}>
        <div className={Classes.LeftSide}>
          <section className={Classes.Description}>
            <div
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(data?.fields.desc),
              }}
            />
          </section>
          <section className={Classes.WarImages}>
            {data ? (
              data.fields.battlepic?.slice(0, 4).map((bp) => (
                <div className={Classes.WarImg}>
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
          </section>
          <div className={Classes.WarImgText}>دیدن عکس های بیشتر...</div>
        </div>
        <div className={Classes.RightSide}>
          <section className={Classes.WarName}>
            <h2>{data?.fields.title}</h2>
          </section>
          <section className={Classes.WarPicture}>
            <img
              src={data?.fields.image.fields.file.url}
              alt=""
              style={{
                width: "100%",
                backgroundPosition: "center",
                backgroundSize: "cover",
                maxHeight: "250px",
              }}
            />
          </section>
          <section className={Classes.WarDetails}>
            <section className={Classes.WarDeath}>
              <div>
                <span className={Classes.Title}>تلفات </span>{" "}
                {data?.fields.casulties ? (
                  data.fields.casulties.map((cs) => (
                    <span className={Classes.CountrySec}>
                      <br />
                      <span
                        style={{
                          fontFamily: "MmdReg",
                          fontSize: "15px",
                        }}
                      >
                        {cs.fields.countries}
                      </span>
                      :{" "}
                      <span style={{ color: "red" }}>{cs.fields.casultie}</span>
                    </span>
                  ))
                ) : (
                  <span className={Classes.CountrySec}>No Data</span>
                )}
              </div>
            </section>
            <section className={Classes.WarSoldiers}>
              <div>
                <span className={Classes.Title}>تعداد سربازها </span>
                {data?.fields.forces ? (
                  data.fields.forces.map((sold) => (
                    <span className={Classes.SoldSec}>
                      <br />
                      <span
                        style={{
                          fontFamily: "MmdReg",
                          fontSize: "15px",
                        }}
                      >
                        {sold.fields.countryname}
                      </span>
                      :
                      <span style={{ color: "green" }}>
                        {sold.fields.forces}
                      </span>
                    </span>
                  ))
                ) : (
                  <span className={Classes.SoldSec}>No data</span>
                )}
              </div>
            </section>
            <section className={Classes.GeneralsCount}>
              <div>
                <span className={Classes.Title}>تعداد ژنرال ها :</span>{" "}
                <span style={{ color: "blue", fontSize: "18px" }}>
                  {data?.fields.generals?.length}
                </span>
              </div>
            </section>
            <section className={Classes.WarDate}>
              <div>
                <span className={Classes.Title}>تاریخ نبرد :</span>{" "}
                <span className={Classes.RealDate}>{data?.fields.date}</span>
              </div>
            </section>
            <section className={Classes.CountriesCount}>
              <div>
                <span className={Classes.Title}>تعداد کشورهای حاضر :</span>{" "}
                <span style={{ color: "blue", fontSize: "18px" }}>
                  {" "}
                  {data?.fields.countries?.length}
                </span>
              </div>
            </section>
          </section>
        </div>
      </section>

      <section className={Classes.WarFooterSection}>
        <section className={Classes.Countries}>
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
                <SwiperSlide>
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
                </SwiperSlide>
              ))
            ) : (
              <h2>No Data</h2>
            )}
          </Swiper>
        </section>
        <section className={Classes.Generals}>
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
                <SwiperSlide>
                  <div className={Classes.SwiperPic}>
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
                        maxWidth: "70%",
                        maxHeight: "400px",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  </div>
                  <br />
                  <br />
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
                  <br />
                  <br />
                  <br />
                </SwiperSlide>
              ))
            ) : (
              <h4>No Data</h4>
            )}
          </Swiper>
        </section>
      </section>
    </>
  );
};

export default SingleWarPage;

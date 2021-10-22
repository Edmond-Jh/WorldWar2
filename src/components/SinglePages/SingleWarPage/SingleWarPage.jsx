import React from "react";
import { useParams } from "react-router";
import Classes from "./SingleWarPage.module.scss";

const SingleWarPage = () => {
  const { id } = useParams();
  return (
    <>
      <section className={Classes.WarSection}>
        <div className={Classes.LeftSide}>
          <section className={Classes.Description}></section>
        </div>
        <div className={Classes.RightSide}>
          <section className={Classes.WarName}></section>
          <section className={Classes.WarPicture}></section>
          <section className={Classes.WarDetails}>
            <section className={Classes.WarDeath}></section>
            <section className={Classes.WarSoldiers}></section>
            <section className={Classes.GeneralsCount}></section>
          </section>
        </div>
      </section>

      <section className={Classes.WarFooterSection}>
        <section className={Classes.Countries}></section>
        <section className={Classes.Generals}></section>
      </section>
    </>
  );
};

export default SingleWarPage;

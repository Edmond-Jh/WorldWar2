import React from "react";
import { useParams } from "react-router";
import Classes from "./SingleWarPage.module.scss";

const SingleWarPage = () => {
  const { id } = useParams();
  return (
    <>
      <section className={Classes.WarSection}>
        <h1>Salam</h1>
        <h2>asdasd</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos,
          laudantium! Voluptatum quod blanditiis saepe nesciunt, quibusdam harum
          libero pariatur quae dicta voluptatem explicabo. Deserunt repellat
          repellendus perferendis consectetur, possimus iure.
        </p>
      </section>
    </>
  );
};

export default SingleWarPage;

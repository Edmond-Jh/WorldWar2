import React from "react";
import GeneralsIntroduce from "../../components/Introduce/GeneralsIntroduce/GeneralsIntroduce";
import GeneralsPage from "../../components/PublicPages/GeneralsPage/GeneralsPage";
const Generals = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <GeneralsIntroduce />
      <GeneralsPage />
    </>
  );
};

export default Generals;

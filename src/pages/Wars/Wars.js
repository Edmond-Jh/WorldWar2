import React from "react";
import WarsIntroduce from "../../components/Introduce/WarsIntroduce/WarsIntroduce";
import WarsPage from "../../components/PublicPages/WarsPage/WarsPage";
const Wars = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <WarsIntroduce />
      <WarsPage />
    </>
  );
};

export default Wars;

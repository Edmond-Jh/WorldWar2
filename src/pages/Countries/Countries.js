import React from "react";
import CountriesIntroduce from "../../components/Introduce/CountriesIntroduce/CountriesIntroduce";
import CountriesPage from "../../components/PublicPages/CountriesPage/CountriesPage";
const Countries = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <CountriesIntroduce />
      <CountriesPage />
    </>
  );
};

export default Countries;

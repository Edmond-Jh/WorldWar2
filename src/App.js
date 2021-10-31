import React from "react";
import { Route, Switch } from "react-router";
///////////////////////////////////// Componenets
import Layout from "./components/Layout/Layout";
import Sides from "./pages/Side/Sides";
import Home from "./pages/Home/Home";
import Countries from "./pages/Countries/Countries";
import Generals from "./pages/Generals/Generals";
import Wars from "./pages/Wars/Wars";
import Contact from "./components/Contact/Contact";
///////////////////////////////////// Css
import "./css/nivo_themes/default/default.css";
import "./css/bootstrap.min.css";
import "./css/animate.min.css";
import "./css/templatemo-style.css";
import "./css/nivo-lightbox.css";
import "./css/font-awesome.min.css";
///////////////////////////////////// Signle Pages
import SidesSingle from "./pages/SidesSingle/SidesSingle";
import SingleWarPage from "./components/SinglePages/SingleWarPage/SingleWarPage";
import SingleGeneralPage from "./components/SinglePages/SingleGeneralPage/SingleGeneralPage";
import SingleCountryPage from "./components/SinglePages/SingleCountryPage/SingleCountryPage";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/wars" exact>
          <Wars />
        </Route>

        <Route path="/wars/:id">
          <SingleWarPage />
        </Route>

        <Route path="/generals" exact>
          <Generals />
        </Route>

        <Route path="/generals/:id">
          <SingleGeneralPage />
        </Route>

        <Route path="/countries" exact>
          <Countries />
        </Route>

        <Route path="/countries/:id">
          <SingleCountryPage />
        </Route>

        <Route path="/Sides" exact>
          <Sides />
        </Route>
        <Route path="/Sides/:id" exact>
          <SidesSingle />
        </Route>
        <Route path="/Sides/countries/:id">
          <SingleCountryPage />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

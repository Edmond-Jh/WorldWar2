import React from "react";
import { Route, Switch } from "react-router";
import Layout from "./components/Layout/Layout";
import Allies from "./pages/Allies/Allies";
import Home from "./pages/Home/Home";
import Countries from "./pages/Countries/Countries";
import Generals from "./pages/Generals/Generals";
import Wars from "./pages/Wars/Wars";
import Contact from "./components/Contact/Contact";
import AlliesSingle from "./pages/AlliesSingle/AlliesSingle";

import "./css/nivo_themes/default/default.css";
import "./css/bootstrap.min.css";
import "./css/animate.min.css";
import "./css/templatemo-style.css";
import "./css/nivo-lightbox.css";
import "./css/font-awesome.min.css";
import SingleWarPage from "./components/SinglePages/SingleWarPage/SingleWarPage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/allies" exact>
          <Allies />
        </Route>
        <Route path="/countries" exact>
          <Countries />
        </Route>
        <Route path="/generals" exact>
          <Generals />
        </Route>
        <Route path="/wars" exact>
          <Wars />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/country/:id"></Route>

        <Route path="/allie/akbar" exact>
          <AlliesSingle />
        </Route>
        <Route path="/war/:id">
          <SingleWarPage />
        </Route>
        <Route path="/general/:id"></Route>
      </Switch>
    </Layout>
  );
}

export default App;

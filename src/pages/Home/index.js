import React from "react";
import * as S from "./styles";

import BreadCrumb from "components/BreadCrumb";
import Card from "components/Card";
import Filter from "components/Filter";
import ListViewSearch from "components/ListViewSearch";
import Navbar from "components/Navbar";
import VerticalMenu from "components/VerticalMenu";

const Home = () => {
  return (
    <>
      <div style={{ display: "flex", height: "100%" }}>
        <div
          style={{
            display: "flex",
            height: "100%",
            zIndex: "10",
            overflow: "hidden",
            flexShrink: 0,
            position: "static",
          }}
        >
          <VerticalMenu />
        </div>
        <div
          style={{
            display: "flex",
            flex: "1 1 0%",
            overflowY: "scroll",
            height: "100%",
            flexDirection: "column",
          }}
        >
          <Navbar />
          <BreadCrumb />
          <div
            style={{
              display: "flex",
              flex: "1 1 0%",
              flexDirection: "row",
            }}
          >
            <Filter />
            <div>
              <ListViewSearch />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

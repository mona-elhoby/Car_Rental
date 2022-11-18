import React from "react";

import { CoverWrapper, Overlay } from "../home/cover/style";
import image from "../../assets/searchPage.jpg";
import Layout from "../../layout/layout";
import Header from "../../features/header";

const Cover = () => {
  return (
    <div>
      <CoverWrapper style={{ backgroundImage: `url(${image.src})` }}>
        <Overlay></Overlay>
        <Layout>
          <Header
            title="Car List Search"
            subTitle="This is sample of page tagline and you can set it up using page option"
            style={{ marginTop: '280px' }}
            style2={{ color: "#FFF !important" }}
          />
        </Layout>
      </CoverWrapper>
    </div>
  );
};

export default Cover;

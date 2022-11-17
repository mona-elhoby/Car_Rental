import React from "react";
import Grid from "@mui/material/Grid";

import Layout from "../../../layout/layout";
import Section from "../second_section/section";
import image1 from '../../../assets/coverimg/coupe.jpg'
import image2 from '../../../assets/coverimg/sedan.jpg'
import image3 from '../../../assets/coverimg/suv.jpg'
import {MainContainer} from '../second_section/style'
import Header from '../../../features/header'

const SectionContainer = () => {
  const data = [
    {
      name: "Coupe",
      background: image1,
    },
    {
      name: "Sedan",
      background: image2,
    },
    {
      name: "SUV",
      background: image3,
    },
  ];
  return (
    <MainContainer>
      <Layout>
        <Header title="Find Car by Type" subTitle="We offer professional car rental & limousine services in our range of high-end vehicles"/>
        <Grid container spacing={2}>
          {data.map((ele, i) => (
            <Grid item sm={4} xs={12} key={i}>
              <Section name={ele.name} image={ele.background} />
            </Grid>
          ))}
        </Grid>
      </Layout>
    </MainContainer>
  );
};

export default SectionContainer;

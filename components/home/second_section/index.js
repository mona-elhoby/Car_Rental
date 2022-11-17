import React from "react";
import Grid from "@mui/material/Grid";

import Layout from "../../../layout/layout";
import Section from "./section";
import image1 from '../../../assets/coverimg/Lexus.jpg'
import image2 from '../../../assets/coverimg/bmw.jpg'
import image3 from '../../../assets/coverimg/Audi.jpg'
import image4 from '../../../assets/coverimg/porche.jpg'
import image5 from '../../../assets/coverimg/MINI-Cooper.jpg'
import image6 from '../../../assets/coverimg/Mercedes.jpg'
import {MainContainer} from './style'
import Header from '../../../features/header'

const SectionContainer = () => {
  const data = [
    {
      name: "Lexus",
      background: image1,
    },
    {
      name: "BMW",
      background: image2,
    },
    {
      name: "Audi",
      background: image3,
    },
    {
      name: "Porsche",
      background: image4,
    },
    {
      name: "MINI",
      background: image5,
    },
    {
      name: "Mercedes Benz",
      background: image6,
    },
  ];
  return (
    <MainContainer>
      <Layout>
        <Header title="First Class Car Rental & Limousine Services" subTitle="We offer professional car rental & limousine services in our range of
          high-end vehicles"/>
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

import React from "react";
import { Grid } from "@mui/material";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CarRentalIcon from "@mui/icons-material/CarRental";
import { useTheme } from "@mui/styles";

import Layout from "../../../layout/layout";
import Header from "../../../features/header";
import {Container} from './style'
import Item from "./item";

const Section = () => {
    const theme=useTheme()

  const data = [
    {
      title: "Variety of Car Brands",
      content:
        "Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo ligula eget dolor.",
      icon: <CarRentalIcon fontSize="large" />,
    },
    {
      title: "Best Rate Guarantee",
      content:
        "Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo ligula eget dolor.",
      icon: <SentimentSatisfiedAltIcon fontSize="large" />,
    },
    {
      title: "Awesome Customer Support",
      content:
        "Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo ligula eget dolor.",
      icon: <FavoriteBorderIcon fontSize="large" />,
    },
  ];

  return (
    <Container theme={theme}>
      <Layout>
        <Header
          title="Why Choose Us"
          subTitle="Explore our first class limousine & car rental services"
          style={{ color: "#FFF" }}
          style2={{
            color: "#FFF !important",
            margin: "auto",
            fontSize: { xs: "15px !important" },
          }}
        />
        <Grid container spacing={3}>
            {data.map((ele, i) => (
          <Grid item sm={4} xs={12} key={i}>
              <Item
                title={ele.title}
                content={ele.content}
                icon={ele.icon}
              />
              </Grid>
            ))}
        </Grid>
      </Layout>
    </Container>
  );
};

export default Section;

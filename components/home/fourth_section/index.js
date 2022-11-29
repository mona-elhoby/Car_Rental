import React from "react";
import { useTheme } from "@mui/material/styles";

import Header from "../../../features/header";
import { SectionContainer, SubHeader, Button } from "./style";
import Layout from "../../../layout/layout";

const FourthSection = () => {
    const theme = useTheme()
  return (
    <SectionContainer>
      <Layout>
        <Header
          title="Our Fleet, Your Fleet"
          subTitle="We know the difference is in the details and that’s why our car rental services, in the tourism
                    and business industry, stand out for their quality and good taste, to offer you an unique experience"
          style={{ color: "#FFF" }}
          style2={{
            color: "#FFF !important",
            margin: "auto",
            width: { md: "750px", xs: "100%" },
            fontSize: { xs: "15px !important" },
          }}
        />
        <SubHeader>Call Now (54)-344-4533-4</SubHeader>
        <Button>Request a Quote</Button>
      </Layout>
    </SectionContainer>
  );
};

export default FourthSection;

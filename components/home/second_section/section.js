import React from "react";

import { SectionLink, SectionBkg, SectionHead } from "./style";

const Section = (props) => {
  return (
    <SectionBkg sx={{ backgroundImage: `url(${props.image.src})` , height: {md: '330px', sm:'200px', xs: '330px'}}}>
      <SectionLink href="#">
        <SectionHead>{props.name}</SectionHead>
      </SectionLink>
    </SectionBkg>
  );
};

export default Section;

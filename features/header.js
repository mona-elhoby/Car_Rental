import React from "react";

import {MainHead, SubMainHead} from '../components/home/second_section/style'

const Header = props => {
  return (
    <>
      <MainHead
        variant="h4"
        sx={{ fontSize: { md: "36px", sm: "24px", xs: "18px" } , ...props.style}}
      >
        {props.title}
      </MainHead>
      <SubMainHead
        nariant="subtitle1"
        sx={{ fontSize: { md: "15px", xs: "10px" }, ...props.style2}}
      >
        {props.subTitle}
      </SubMainHead>
    </>
  );
};

export default Header;

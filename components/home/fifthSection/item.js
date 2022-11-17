import React from "react";
import Typography from "@mui/material/Typography";

const Item = props => {
  return (
    <>
      <div>{props.icon}</div>
      <Typography variant="h6" sx={{marginBottom: '15px', fontSize: {md: '18px', sm: '14px', xs: '20px'}}}>{props.title}</Typography>
      <Typography variant="subTitle" sx={{display: 'block', fontSize: {md: '13px', sm: '12px', xs: "13px"}, wordBreak: 'break-all', padding: '0 10px'}}>{props.content}</Typography>
    </>
  );
};

export default Item;

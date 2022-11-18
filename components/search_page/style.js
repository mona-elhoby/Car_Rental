import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const FilterWrapper = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
  box-shadow: 0 5px 40px rgb(0 0 0 / 15%);
  padding: 20px;
  border: 1px solid #e1e1e1;
`;

export const DivContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImgName = styled.h4`
  margin-top: 10px;
`;

export const CarPrice = styled.div`
  margin-top: -50px;
`;

export const RatingText = styled(Typography)`
  display: inline-block;
  margin-top: -10px;
  margin-left: 5px;
  font-size: 12px;
`;

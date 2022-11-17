import styled from "@emotion/styled";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import Typography from "@mui/material/Typography";

export const MainContainer = styled.div`
  padding: 60px 0;
`;

export const MainHead = styled(Typography)`
  text-align: center;
`;

export const SubMainHead = styled(Typography)`
  display: block;
  text-align: center;
  font-weight: 500;
  color: #8d9199;
  margin-bottom: 60px;
`;

export const SectionBkg = styled(Paper)`
  border-radius: 5px;
  background-size: cover;
  background-position: center center;
  position: relative;
  background-color: #f9f9f9;
  margin-bottom: 30px;
  height: 330px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 10px rgb(0 0 0 / 15%);
  }
`;

export const SectionLink = styled(Link)`
  display: block;
  min-height: 330px;
  text-decoration: none;
`;

export const SectionHead = styled.h2`
  padding: 10px 20px 10px 20px;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  position: absolute;
  bottom: 0;
`;

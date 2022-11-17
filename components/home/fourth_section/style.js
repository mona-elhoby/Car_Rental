import styled from "@emotion/styled";

import image from "../../../assets/fourth-bkg.jpg";

export const SectionContainer = styled.div`
  padding: 150px 0;
  background-image: url(${image.src});
  background-size: cover;
  text-align: center;
  color: #fff;
`;

export const SubHeader = styled.h4`
  margin-top: -20px;
  padding-bottom: 1.3em;
  font-weight: 600;
`;

export const Button = styled.button`
  border: none;
  padding: 10px 25px;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  background-color: ${(props) => props.theme.palette.primary.main};
  &:hover {
    background-color: ${(props) => props.theme.palette.secondary.main};
  }
`;

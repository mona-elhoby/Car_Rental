import React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import {useMediaQuery} from "@mui/material";

import { DivContainer, ImgName, CarPrice, RatingText, Strong, Smalltxt, ListContainer, ListItem, List } from "./style";
import Layout from "../../layout/layout";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const Item = (props) => {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const smallMatches = useMediaQuery("(max-width: 620px)");

  return (
    <Layout>
      <img
        src={props.image}
        alt="image"
        width="100%"
        height={300}
        style={{ borderRadius: "5px" }}
      />
      <div>
        <div>
          <ImgName>{props.car?.maker} {props.car?.model} <small style={{fontWeight: 400}}>{props.car.manufacturingYear}</small></ImgName>
          <p>
            <Rating
              name="hover-feedback"
              value={value}
              precision={0.5}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
              sx={{fontSize: '14px'}}
            />
            {value !== null && (
              <RatingText variant="subTitle" sx={{ ml: 2, marginTop: '-10px' }}>
                {labels[hover !== -1 ? hover : value]}
              </RatingText>
            )}
          </p>
          <DivContainer>
            <DivContainer>
              <div>
                <div>
                  <PersonOutlineIcon />
                </div>
                <Smalltxt>4</Smalltxt>
              </div>
              <div>
                <div>
                  <BusinessCenterOutlinedIcon />
                </div>
                <Smalltxt>2</Smalltxt>
              </div>
              <div>
                <div>
                  <AnalyticsOutlinedIcon />
                </div>
                <Smalltxt>Auto</Smalltxt>
              </div>
            </DivContainer>
            <CarPrice>
              <div>
                <sup>$</sup>
                <Strong>{props.car?.pricing?.daily?.price}</Strong>
              </div>{" "}
              <Smalltxt>Per Day</Smalltxt>
            </CarPrice>
          </DivContainer>
        </div>
        <ListContainer smallScreen={smallMatches}>
          <List>
            <ListItem>	&#10003; Audio input</ListItem>
            <ListItem>	&#10003; Bluetooth</ListItem>
            <ListItem>	&#10003; Heated seats</ListItem>
            </List>
            <List>
              
            <ListItem>	&#10003; All Wheel drive</ListItem>
            <ListItem>	&#10003; USB input</ListItem>
            <ListItem>	&#10003; FM Radio</ListItem>
            </List>
        </ListContainer>
      </div>
    </Layout>
  );
};

export default Item;

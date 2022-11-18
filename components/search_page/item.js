import React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";

import { DivContainer, ImgName, CarPrice, RatingText } from "./style";
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
          <ImgName>{props.name}</ImgName>
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
            />
            {value !== null && (
              <RatingText variant="subTitle" sx={{ ml: 2 }}>
                {labels[hover !== -1 ? hover : value]}
              </RatingText>
            )}
          </p>
          <DivContainer>
            <DivContainer>
              <div>
                <p>
                  <PersonOutlineIcon />
                </p>
                <span>4</span>
              </div>
              <div>
                <p>
                  <BusinessCenterOutlinedIcon />
                </p>
                <span>2</span>
              </div>
              <div>
                <p>
                  <AnalyticsOutlinedIcon />
                </p>
                <span>Auto</span>
              </div>
            </DivContainer>
            <CarPrice>
              <p>
                <sup>$</sup>
                <srtong>64</srtong>
              </p>{" "}
              <span>Per Day</span>
            </CarPrice>
          </DivContainer>
        </div>
      </div>
    </Layout>
  );
};

export default Item;

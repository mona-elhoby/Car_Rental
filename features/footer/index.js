import React from "react";
import Image from "next/image";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/styles';

import {
  Footerbkg,
  ListOrderItem,
  LastListOrderItem,
  HeaderItemList,
  SubmitFormFooter,
  SubmitFormFooterBtn,
  SocialIconFooter,
  OrderListFooter,
  SocialFooter,
  Content
} from "./style";
import Layout from "../../layout/layout";
import Copyright from "./copyright";

const Footer = () => {
    const theme = useTheme();

    //icon style
    const iconClass = {
        fontSize: "15px", verticalAlign: 'middle' 
    }
  return (
    <>
    <Footerbkg>
      <Layout>
        <Grid container>
            <Grid item md={4}>
          <ListOrderItem>
            <HeaderItemList>About Us</HeaderItemList>
            <div>
              <Content>
                Getting dressed up and traveling with good friends makes for a
                shared, unforgettable experience.{" "}
              </Content>
              <Content>
                <Image
                  src={require("../../assets/logo.png")}
                  alt=""
                  width="175"
                  height="24"
                  // priority={true}
                />
              </Content>
            </div>
          </ListOrderItem>
            </Grid>
            <Grid item md={4}>
          <ListOrderItem>
            <HeaderItemList>Contact Info</HeaderItemList>
            <div>
              <Content>
                <PhoneIphoneOutlinedIcon sx={iconClass} />
                1-567-124-44227
              </Content>
              <Content>
                <LocationOnOutlinedIcon sx={iconClass} />
                184 Main Street East Perl Habour 8007
              </Content>
              <Content>
                <AccessAlarmOutlinedIcon sx={iconClass} />
                Mon - Sat 8.00 - 18.00 Sunday CLOSED
              </Content>
              <div>
                <div>
                  <OrderListFooter>
                    <SocialFooter>
                      <SocialIconFooter href="https://facebook.com/">
                        <FacebookIcon sx={{fontSize: '18px' }} />
                      </SocialIconFooter>
                    </SocialFooter>
                    <SocialFooter>
                      <SocialIconFooter href="https://twitter.com/">
                        <TwitterIcon sx={{fontSize: '18px' }} />
                      </SocialIconFooter>
                    </SocialFooter>
                    <SocialFooter>
                      <SocialIconFooter href="https://youtubetwitter.com/">
                        <YouTubeIcon sx={{fontSize: '18px' }} />
                      </SocialIconFooter>
                    </SocialFooter>
                    <SocialFooter>
                      <SocialIconFooter href="https://pinterest.com/">
                        <PinterestIcon sx={{fontSize: '18px' }} />
                      </SocialIconFooter>
                    </SocialFooter>
                    <SocialFooter>
                      <SocialIconFooter href="https://instagram.com">
                        <InstagramIcon sx={{fontSize: '18px' }} />
                      </SocialIconFooter>
                    </SocialFooter>
                  </OrderListFooter>
                </div>
              </div>
            </div>
          </ListOrderItem></Grid>
          <Grid item md={4}>
          <LastListOrderItem>
            <HeaderItemList>Newsletter</HeaderItemList>

            <form
              id="mc4wp-form-1"
              method="post"
              data-id="27"
              data-name="Newsletter"
            >
              <div>
                <Content>Don&#39;t miss a thing! Sign up to receive daily deals</Content>
                <SubmitFormFooter
                  sx={{ background: "#FFF" }}
                  type="email"
                  name="EMAIL"
                  placeholder="Your Email Address"
                  required
                />
                <br />
                <SubmitFormFooterBtn type="submit" value="Subscribe" theme={theme}/>
              </div>
            </form>
          </LastListOrderItem></Grid>
        </Grid>
      </Layout>
    </Footerbkg>
    <Copyright /> 
    </>
  );
};

export default Footer;

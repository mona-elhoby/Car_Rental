import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import useMediaQuery from "@mui/material/useMediaQuery";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useTheme } from '@mui/styles';

import {
  WrapperDiv,
  ContentWrapper,
  SocialWrapper,
  SocialWrapperul,
  SocialWrapperulli,
  SocialWrapperullia,
  ContactInfo,
  AddressInfo,
  OtherInfo,
} from "./style";
import Layout from "../../layout/layout"

const TopBar = () => {
    const smallMatches = useMediaQuery("(max-width: 600px)");
    const theme = useTheme();
   
  const iconStyle = {
    verticalAlign: 'middle',
    marginRight: '5px',
    fontSize: '13px'
  };
  return (
    <WrapperDiv smallMedia={smallMatches}>
         <Layout>
      <ContentWrapper>
        <SocialWrapper>
          <SocialWrapperul>
            <SocialWrapperulli>
              <SocialWrapperullia theme={theme} href="http://facebook.com/">
                <FacebookIcon sx={{fontSize: '16px'}}/>
              </SocialWrapperullia>
            </SocialWrapperulli>
            <SocialWrapperulli>
              <SocialWrapperullia theme={theme} href="http://twitter.com/">
                <TwitterIcon sx={{fontSize: '16px'}}/>
              </SocialWrapperullia>
            </SocialWrapperulli>
            <SocialWrapperulli>
              <SocialWrapperullia theme={theme} href="http://youtube.com/">
                <YouTubeIcon sx={{fontSize: '16px'}}/>
              </SocialWrapperullia>
            </SocialWrapperulli>
            <SocialWrapperulli>
              <SocialWrapperullia theme={theme} href="http://pinterest.com/">
                <PinterestIcon sx={{fontSize: '16px'}}/>
              </SocialWrapperullia>
            </SocialWrapperulli>
            <SocialWrapperulli>
              <SocialWrapperullia theme={theme} href="http://instagram.com/theplanetd">
                <InstagramIcon sx={{fontSize: '16px'}}/>
              </SocialWrapperullia>
            </SocialWrapperulli>
          </SocialWrapperul>
        </SocialWrapper>
        <ContactInfo>
          <AddressInfo>
            <div>
              <LocationOnOutlinedIcon color="primary" fontSize="small" sx={iconStyle} />
              184 Main Street East 8007
            </div>
          </AddressInfo>
          <OtherInfo>
            <div>
              <PhoneIphoneOutlinedIcon color="primary" fontSize="small" sx={iconStyle} />
              1.800.456.6743
            </div>
          </OtherInfo>
          <OtherInfo>
            <div>
              <AccessAlarmOutlinedIcon color="primary" fontSize="small" sx={iconStyle} />
              Mon-Fri 09.00 - 17.00
            </div>
          </OtherInfo>
        </ContactInfo>
      </ContentWrapper>
      </Layout>
    </WrapperDiv>
  );
};

export default TopBar;

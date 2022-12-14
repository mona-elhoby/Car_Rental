import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import TransgenderIcon from "@mui/icons-material/Transgender";
import { Avatar, Grid, Typography } from "@mui/material";
import GppBadIcon from "@mui/icons-material/GppBad";
import MailIcon from "@mui/icons-material/Mail";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import React from "react";

import { header, icon, nationality, Item, Button } from "./style";

const ProfileHead = (props) => {
  const theme = useTheme();
  return (
    <Grid container>
      <Grid item md={4} sm={4} xs={12}>
        <Avatar
          alt="Remy Sharp"
          sx={{ width: 168, height: 168 }}
          src={props.avatar?.code ? null : props.avatar}
        >
          {props.avatar?.code
            ? `${props.user.firstName?.slice(
                0,
                1
              )} ${props.user.lastName?.slice(0, 1)}`
            : null}
        </Avatar>
      </Grid>
      <Grid item md={8} sm={8} xs={12}>
        <Typography variant="h6" sx={header}>
          {props.user?.firstName + " " + props.user?.lastName}
        </Typography>
        {props.user?.isVerified?.phone || props.user?.isVerified?.email ? (
          <VerifiedUserIcon sx={{ color: theme.palette.secondary.main }} />
        ) : (
          <GppBadIcon />
        )}
        <Button theme={theme}>
          <Link href="/setting" style={{ color: "#FFF" }}>
            update
          </Link>
        </Button>
        <Typography variant="caption" sx={nationality}>
          {props.user?.nationality?.name}
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${props.user?.nationality?.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${props.user?.nationality?.code.toLowerCase()}.png 2x`}
            alt=""
            style={{ marginLeft: "5px" }}
          />
        </Typography>
        <Item>
          <PhoneAndroidIcon
            sx={[icon, { color: theme.palette.secondary.main }]}
          />{" "}
          <Typography variant="caption">{props.user?.phone}</Typography>
        </Item>
        <Item>
          <MailIcon sx={[icon, { color: theme.palette.secondary.main }]} />{" "}
          <Typography variant="caption">{props.user?.email}</Typography>
        </Item>
        <Item>
          <TransgenderIcon
            sx={[icon, { color: theme.palette.secondary.main }]}
          />{" "}
          <Typography variant="caption">{props.user?.gender}</Typography>
        </Item>
      </Grid>
    </Grid>
  );
};

export default ProfileHead;

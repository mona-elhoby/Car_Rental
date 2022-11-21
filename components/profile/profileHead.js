
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import TransgenderIcon from '@mui/icons-material/Transgender';
import { Avatar, Grid, Typography } from "@mui/material";
import GppBadIcon from '@mui/icons-material/GppBad';
import MailIcon from '@mui/icons-material/Mail';
import React from "react";

const ProfileHead = (props) => {
  return (
    <Grid container>
      <Grid item md={4} sm={3} xs={12}>
        <Avatar
          alt="avatar"
          sx={{ width: 168, height: 168 }}
        //   img={}
        />
      </Grid>
      <Grid item md={8} sm={9} xs={12}>
        <Typography variant="h6">{props.user?.firstName + ' ' + props.user?.lastName}</Typography>
        {props.user?.isVerified.phone || props.user?.isVerified.email ? <VerifiedUserIcon /> : <GppBadIcon /> }
        <Typography variant="caption">{props.user?.nationality.name}</Typography>
        <div>
            <PhoneAndroidIcon /> <Typography variant="caption">{props.user?.phone}</Typography>
        </div>
        <div>
            <MailIcon /> <Typography variant="caption">{props.user?.email}</Typography>
        </div>
        <div>
            <TransgenderIcon /> <Typography variant="caption">{props.user?.gender}</Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default ProfileHead;

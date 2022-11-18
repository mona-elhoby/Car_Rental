import React from "react";
import Link from "next/link";
import { useTheme } from "@mui/styles";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NativeSelect from '@mui/material/NativeSelect';

import FormShap from "./form-shap";
import {
  Screen,
  ScreenContent,
  LoginLink,
  LoginFeild,
  PersonIconStyle,
  LockIconStyle,
  LoginInput,
  LoginSubmit,
  IconSubmit,
  NoAccount,
  SignupForm,
  IconStyle,
  BusinessIconStyle,
  MailIconStyle,
  PhoneIphoneIconStyle,
} from "./style";

const Form = (props) => {
  const theme = useTheme();
  return (
    <Screen>
      <ScreenContent>
        <SignupForm>
          <LoginFeild>
            <PersonIconStyle sx={IconStyle} theme={theme} />
            <LoginInput
              type="text"
              placeholder="First name"
              value={props.firstName}
              onChange={props.handleChangeFirstName}
              required
              error={props.fNameValid ? true : false}
            />
            {props.fNameValid ? (
              <FormHelperText
                sx={{ marginTop: "0 !important", marginBottom: "-15px" }}
              >
                check firstName
              </FormHelperText>
            ) : null}
          </LoginFeild>
          <LoginFeild>
            <PersonIconStyle sx={IconStyle} theme={theme} />
            <LoginInput
              type="text"
              placeholder="Last name"
              value={props.lastName}
              onChange={props.handleChangeLastName}
              required
              error={props.lNameValid ? true : false}
            />
            {props.lNameValid ? (
              <FormHelperText
                sx={{ marginTop: "0 !important", marginBottom: "-15px" }}
              >
                check lastName
              </FormHelperText>
            ) : null}
          </LoginFeild>
          <LoginFeild>
            <MailIconStyle sx={IconStyle} theme={theme} />
            <LoginInput
              type="email"
              placeholder="Email"
              value={props.email}
              onChange={props.handleChangeEmail}
            />
          </LoginFeild>
          <LoginFeild>
            <PhoneIphoneIconStyle sx={IconStyle} theme={theme} />
            <div style={{display: 'flex'}}>
            <FormControl sx={{ m: 1, width: 25, display: 'inline-block' }} size="small">
              <NativeSelect
                value={props.phoneKey}
                onChange={props.handleChangePhoneKey}
              >
                {
                  props.countries?.map((ele,i) => (
                    <MenuItem key={ele.id} value={ele.phone}>{ele.phone}</MenuItem>
                  ))
                }
              </NativeSelect>
            </FormControl>
            <LoginInput
              type="text"
              placeholder="Phone"
              value={props.phone}
              onChange={props.handleChangePhone}
              required
              maxLength="10"
              error={props.phoneValid ? true : false}
              sx={{display: 'inline-block'}}
            />
            {props.phoneValid ? (
              <FormHelperText
                sx={{ marginTop: "0 !important", marginBottom: "-15px" }}
              >
                check Phone Number
              </FormHelperText>
            ) : null}
            </div>
          </LoginFeild>
          <LoginFeild>
            <BusinessIconStyle sx={IconStyle} theme={theme} />
            <LoginInput
              type="text"
              placeholder="Company"
              value={props.company}
              onChange={props.handleChangeCompany}
            />
          </LoginFeild>
          <LoginFeild>
            <LockIconStyle sx={IconStyle} theme={theme} />
            <LoginInput
              type="password"
              placeholder="Password"
              value={props.password}
              onChange={props.handleChangePassword}
              maxLength="6"
            />
          </LoginFeild>
          <LoginSubmit onClick={props.handleSignupForm}>
            <span>Sign Up</span>
            <IconSubmit />
          </LoginSubmit>
        </SignupForm>
        <LoginLink>
          <NoAccount>have account </NoAccount>
          <NoAccount>
            <Link href="/login" style={{ color: "#FFF" }}>
              Log In
            </Link>
          </NoAccount>
        </LoginLink>
        <FormShap />
      </ScreenContent>
    </Screen>
  );
};

export default React.memo(Form);

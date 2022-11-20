import React from "react";
import Link from "next/link";
import { useTheme } from "@mui/styles";
import FormHelperText from "@mui/material/FormHelperText";
import 'react-phone-number-input/style.css'
import PhoneInput from "react-phone-number-input";

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
                check your firstName
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
                check your lastName
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
              error={props.emailValid ? true : false}
            />
            {props.emailValid ? (
              <FormHelperText
                sx={{ marginTop: "0 !important", marginBottom: "-15px" }}
              >
                check your email
              </FormHelperText>
            ) : null}
          </LoginFeild>
          <LoginFeild>
            {/* <PhoneIphoneIconStyle sx={IconStyle} theme={theme} /> */}
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              <PhoneInput
                international
                countryCallingCodeEditable={false}
                defaultCountry="RU"
                placeholder="key"
                value={props.phoneKey}
                onChange={props.setPhoneKey}
                maxLength={props.phoneKey?.length}
              />
              <LoginInput
                type="tel"
                placeholder="Phone"
                value={props.phone}
                onChange={props.handleChangePhone}
                required
                maxLength="14"
                error={props.phoneValid ? true : false}
                sx={{
                  display: "inline-block",
                  width: "calc(75% - 70px) !important",
                  padding: '3px 0 0 10px !important'
                }}
              />
            </div>
            {props.phoneValid ? (
              <FormHelperText
                sx={{ marginTop: "0 !important", marginBottom: "-15px" }}
              >
                check Phone Number
              </FormHelperText>
            ) : null}
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
              maxLength="8"
              error={props.passwordValid ? true : false}
            />
            {props.passwordValid ? (
              <FormHelperText
                sx={{ marginTop: "0 !important", marginBottom: "-15px" }}
              >
                check your password
              </FormHelperText>
            ) : null}
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

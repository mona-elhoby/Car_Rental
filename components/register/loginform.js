import React, { useCallback, useState } from "react";
import Link from "next/link";
import { useTheme } from "@mui/styles";
import Switch from "@mui/material/Switch";
import FormControl from "@mui/material/FormControl";
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from "@mui/material/FormControlLabel";

import FormShap from "./form-shap";
import {
  Screen,
  Login,
  Signup,
  NoAccount,
  IconStyle,
  LoginFeild,
  LoginInput,
  IconSubmit,
  LoginSubmit,
  ScreenContent,
  LockIconStyle,
  PhoneIphoneIconStyle,
} from "./style";

const Form = (props) => {
  const theme = useTheme()
  const [labelName, setLabelName] = useState("otp");
  const handleChange = useCallback((e) => {
    if (labelName == "otp") {
      setLabelName("password");
    } else {
      setLabelName("otp");
    }
  }, [labelName]);

  return (
    <Screen>
      <ScreenContent>
        <Login>
          <LoginFeild>
            <PhoneIphoneIconStyle sx={IconStyle} theme={theme}/>
            <LoginInput
              type="text"
              placeholder="Phone / Email"
              value={props.value}
              onChange={props.handleChangeValue}
              required
              error={props.phoneValid ? true : false}
            />
            {props.phoneValid ? (<FormHelperText sx={{marginTop: '0 !important'}}>check Phone Number / Email</FormHelperText>) : null}
          </LoginFeild>
          <FormControl>
            <FormControlLabel
              control={
                <Switch
                  checked={labelName == "otp" ? true : false}
                  onChange={handleChange}
                  size="small"
                  color="primary"
                />
              }
              label={labelName}
            />
          </FormControl>
          {
            labelName == 'otp' ? null : (
              <LoginFeild>
                <LockIconStyle sx={IconStyle} theme={theme}/>
                <LoginInput
                  type="password"
                  placeholder="Password"
                  value={props.password}
                  onChange={props.handleChangeEmail}
                />
              </LoginFeild>
            )
          }
          <LoginSubmit>
            <span>Log In</span>
            <IconSubmit />
          </LoginSubmit>
        </Login>
        <Signup onClick={props.handleLogin}>
          <NoAccount>have not account </NoAccount>
          <NoAccount>
            <Link href="/signup" style={{ color: "#FFF" }}>
              Sign Up
            </Link>
          </NoAccount>
        </Signup>
        <FormShap />
      </ScreenContent>
    </Screen>
  );
};

export default React.memo(Form);

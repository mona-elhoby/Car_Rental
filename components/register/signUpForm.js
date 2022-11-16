import React from "react";
import Link from "next/link";
import { useTheme } from "@mui/styles";

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
  PhoneIphoneIconStyle
} from "./style";

const Form = props => {
  const theme = useTheme()
  return (
    <Screen>
      <ScreenContent>
        <SignupForm>
          <LoginFeild>
            <PersonIconStyle sx={IconStyle} theme={theme}/>
            <LoginInput type="text" placeholder="First name" value={props.firstName} onChange={props.handleChangeFirstName} required />
          </LoginFeild>
          <LoginFeild>
            <PersonIconStyle sx={IconStyle} theme={theme}/>
            <LoginInput type="text" placeholder="Last name" value={props.lastName} onChange={props.handleChangeLastName} required/>
          </LoginFeild>
          <LoginFeild>
            <MailIconStyle sx={IconStyle} theme={theme}/>
            <LoginInput type="email" placeholder="Email" value={props.email} onChange={props.handleChangeEmail}/>
          </LoginFeild>
          <LoginFeild>
            <PhoneIphoneIconStyle sx={IconStyle} theme={theme}/>
            <LoginInput type="text" placeholder="Phone" value={props.phone} onChange={props.handleChangePhone} required maxlength="10"/>
          </LoginFeild>
          <LoginFeild>
            <BusinessIconStyle sx={IconStyle} theme={theme}/>
            <LoginInput type="text" placeholder="Company" value={props.company} onChange={props.handleChangeCompany}/>
          </LoginFeild>
          <LoginFeild>
            <LockIconStyle sx={IconStyle} theme={theme}/>
            <LoginInput type="password" placeholder="Password" value={props.password} onChange={props.handleChangePassword} maxlength="6"/>
          </LoginFeild>
          <LoginSubmit onClick={props.handleSignupForm}>
            <span>Sign Up</span>
            <IconSubmit />
          </LoginSubmit>
        </SignupForm>
        <LoginLink>
          <NoAccount>have account </NoAccount>
          <NoAccount><Link href="/login" style={{color: '#FFF'}}>Log In</Link></NoAccount>
        </LoginLink>
        <FormShap />
      </ScreenContent>
    </Screen>
  );
};

export default React.memo(Form);

import React from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

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
  Signup,
  NoAccount,
  SignupForm,
  IconStyle,
  BusinessIconStyle,
  MailIconStyle
} from "./style";
import {signup} from "../../store/reducer/auth"

const Form = () => {
    const dispatch = useDispatch()
  return (
    <Screen>
      <ScreenContent>
        <SignupForm>
          <LoginFeild>
            <PersonIconStyle sx={IconStyle}/>
            <LoginInput type="text" placeholder="First name" />
          </LoginFeild>
          <LoginFeild>
            <PersonIconStyle sx={IconStyle}/>
            <LoginInput type="text" placeholder="Last name" />
          </LoginFeild>
          <LoginFeild>
            <MailIconStyle sx={IconStyle}/>
            <LoginInput type="email" placeholder="Email" />
          </LoginFeild>
          <LoginFeild>
            <PersonIconStyle sx={IconStyle}/>
            <LoginInput type="text" placeholder="Phone" />
          </LoginFeild>
          <LoginFeild>
            <BusinessIconStyle sx={IconStyle}/>
            <LoginInput type="text" placeholder="Company" />
          </LoginFeild>
          <LoginFeild>
            <LockIconStyle sx={IconStyle}/>
            <LoginInput type="password" placeholder="Password" />
          </LoginFeild>
          <LoginSubmit>
            <span>Sign Up</span>
            <IconSubmit />
          </LoginSubmit>
        </SignupForm>
        <LoginLink>
          <NoAccount>have account </NoAccount>
          <NoAccount><Link href="/login">Log In</Link></NoAccount>
        </LoginLink>
        <FormShap />
      </ScreenContent>
    </Screen>
  );
};

export default Form;

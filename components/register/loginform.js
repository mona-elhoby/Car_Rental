import React from "react";
import Link from "next/link";

import FormShap from "./form-shap";
import {
  Screen,
  ScreenContent,
  Login,
  LoginFeild,
  PersonIconStyle,
  LockIconStyle,
  LoginInput,
  LoginSubmit,
  IconSubmit,
  Signup,
  NoAccount,
  IconStyle
} from "./style";

const Form = () => {
  return (
    <Screen>
      <ScreenContent>
        <Login>
          <LoginFeild>
            <PersonIconStyle sx={IconStyle}/>
            <LoginInput type="text" placeholder="User name / Email" />
          </LoginFeild>
          <LoginFeild>
            <LockIconStyle sx={IconStyle}/>
            <LoginInput type="password" placeholder="Password" />
          </LoginFeild>
          <LoginSubmit>
            <span>Log In</span>
            <IconSubmit />
          </LoginSubmit>
        </Login>
        <Signup>
          <NoAccount>have not account </NoAccount>
          <NoAccount><Link href="/signup">Sign Up</Link></NoAccount>
        </Signup>
        <FormShap />
      </ScreenContent>
    </Screen>
  );
};

export default Form;

import React, { useCallback } from "react";
import Link from "next/link";

import {
  Screen,
  Login,
  IconSubmit,
  LoginSubmit,
  ScreenContent,
  LoginFeild,
  VerifyInput
} from "../components/register/style";
import FormShap from "../components/register/form-shap";
import { Background } from "../components/register/form-bkg";
import { Wrapper, Container } from "../components/register/style.js";

const Form = () => {
    const handleChange = useCallback(e => {
        if(e.target.value.length == 1){
            document.getElementById(e.target.id)?.nextSibling?.focus()
        }
    }, [])
  return (
    <Wrapper>
      <Container>
        <Screen>
          <ScreenContent>
            <Login>
            <LoginFeild>
                {
                    [...Array(6)].map((ele, i) => (<VerifyInput key={i} id={`ele${i}`} maxLength="1" onChange={handleChange}/>))
                }
            </LoginFeild>
              <LoginSubmit>
                <span>Verify</span>
                <IconSubmit />
              </LoginSubmit>
            </Login>
            <FormShap />
          </ScreenContent>
        </Screen>
        <Background />
      </Container>
    </Wrapper>
  );
};

export default Form;

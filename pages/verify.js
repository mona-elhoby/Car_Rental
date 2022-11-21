import React, { useCallback } from "react";
import Link from "next/link";

import {
  Screen,
  Login,
  ScreenContent,
} from "../components/register/style";
import FormShap from "../components/register/form-shap";
import { Background } from "../components/register/form-bkg";
import { Wrapper, Container } from "../components/register/style.js";
import Verify from "../container/register/verify";

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
            <Verify />
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

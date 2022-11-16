import React, { useCallback, useState, useMemo } from "react";
import { useDispatch } from "react-redux";

import Form from "../../components/register/signUpForm";
import {login} from '../../store/reducer/auth'

const Signup = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Form
      value={value}
      handleChangePhone={useCallback((e) => setValue(e.target.value), [])}
      password={password}
      handleChangePassword={useCallback((e) => setPassword(e.target.value), [])}
      handleLogin={(e) => {
        console.log(
          "email: ",
          email,
          "password: ",
          password,
          "phoneNumber: ",
          phoneNumber
        );
      }}
    />
  );
};

export default Signup;

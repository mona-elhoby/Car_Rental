import React, { useCallback, useState, useMemo } from "react";
import { useDispatch } from "react-redux";

import { signup } from "../../store/reducer/auth";
import Form from "../../components/register/signUpForm";

const Signup = () => {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Form
      phone={phoneNumber}
      handleChangePhone={useCallback((e) => setPhoneNumber(e.target.value), [])}
      firstName={firstName}
      handleChangeFirstName={useCallback(
        (e) => setFirstName(e.target.value),
        []
      )}
      lastName={lastName}
      handleChangeLastName={useCallback((e) => setLastName(e.target.value), [])}
      password={password}
      handleChangePassword={useCallback((e) => setPassword(e.target.value), [])}
      company={company}
      handleChangeCompany={useCallback((e) => setCompany(e.target.value), [])}
      email={email}
      handleChangeEmail={useCallback((e) => setEmail(e.target.value), [])}
      handleSignupForm={(e) => {
        console.log(
          "email: ",
          email,
          "company: ",
          company,
          "password: ",
          password,
          "lastName: ",
          lastName,
          "firstName: ",
          firstName,
          "phoneNumber: ",
          phoneNumber
        );
        dispatch(
          signup({
            firstName: firstName ? firstName : undefined,
            lastName: lastName ? lastName :undefined,
            email: email ? email : undefined,
            phone: phoneNumber ? phoneNumber : undefined,
            password: password ? password :undefined,
            company: {
              name: company ? company :undefined,
            },
          })
        ).then(res => console.log(res.payload))
      }}
    />
  );
};

export default Signup;

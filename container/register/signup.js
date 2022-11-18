import React, { useCallback, useState, useMemo } from "react";
import { useDispatch } from "react-redux";

import { signup } from "../../store/reducer/auth";
import Form from "../../components/register/signUpForm";
import {countrySlice} from '../../store/reducer/profile'

const Signup = () => {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneKey, setPhoneKey] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [fNameValidate, setFNameValidate] = useState(false);
  const [lNameValidate, setLNameValidate] = useState(false);
  const [phoneValidate, setPhoneValidate] = useState(false);

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
      fNameValid={fNameValidate}
      lNameValid={lNameValidate}
      phoneValid={phoneValidate}
      handleSignupForm={(e) => {
        if (!fNameValidate) {
          setFNameValidate(true);
        }
        if (!lNameValidate) {
          setLNameValidate(true);
        }
        if (!phoneValidate) {
          setPhoneValidate(true);
        }
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
            lastName: lastName ? lastName : undefined,
            email: email ? email : undefined,
            phone: phoneNumber ? phoneNumber : undefined,
            password: password ? password : undefined,
            company: {
              name: company ? company : undefined,
            },
          })
        ).then((res) => console.log(res.payload));
      }}
    />
  );
};

export default Signup;

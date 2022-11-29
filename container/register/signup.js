import React, { useCallback, useState, } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useRouter } from 'next/router'

import { signup, validatePhoneNumber } from "../../store/reducer/auth";
import Form from "../../components/register/signUpForm";

const Signup = () => {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneKey, setPhoneKey] = useState("+7");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [fNameValidate, setFNameValidate] = useState(false);
  const [lNameValidate, setLNameValidate] = useState(false);
  const [phoneValidate, setPhoneValidate] = useState(false);
  const [passwordValidate, setPasswordValidate] = useState(false);
  const [emailValidate, setEmailValidate] = useState(false);

  const router = useRouter()

  return (
    <Form
      phone={phoneNumber}
      handleChangePhone={useCallback((e) => setPhoneNumber(e.target.value), [])}
      phoneKey={phoneKey}
      setPhoneKey={setPhoneKey}
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
      emailValid={emailValidate}
      passwordValid={passwordValidate}
      handleSignupForm={(e) => {
        if (!firstName) {
          setFNameValidate(true);
        }
        if (!lastName) {
          setLNameValidate(true);
        }
        if (!phoneNumber || !phoneKey) {
          setPhoneValidate(true);
        }
        if (password) {
          if (
            !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
              password
            )
          ) {
            setPasswordValidate(true);
          }
        }
        if (email) {
          if (
            !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
              email
            )
          ) {
            setEmailValidate(true);
          }
        }
        if (
          !fNameValidate &&
          !lNameValidate &&
          !phoneValidate &&
          !emailValidate &&
          !passwordValidate
        ) {
          dispatch(validatePhoneNumber(phoneKey + phoneNumber)).then(res => console.log(res))
          dispatch(
            signup({
              firstName: firstName ? firstName : undefined,
              lastName: lastName ? lastName : undefined,
              email: email ? email : undefined,
              phone:
                phoneKey && phoneNumber ? phoneKey + phoneNumber : undefined,
              password: password ? password : undefined,
              company: company
                ? {
                    name: company,
                  }
                : undefined,
            })
          ).then((res) => {
            console.log(res);
            if (res?.payload?.status == 201) {
              router.push('/login')
            }
          });
        }
      }}
    />
  );
};

export default Signup;

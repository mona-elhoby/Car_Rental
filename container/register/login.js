import React, { useCallback, useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import Form from "../../components/register/loginform";
import { GetOTP, Login } from "../../store/reducer/auth";
import {
  startTimer,
  millisToMinutesAndSeconds,
} from "../../services/timerFunc";

const Signup = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");
  const [counter, setCounter] = useState(0);
  const [showCounter, setShowCounter] = useState(false);
  const [phoneValidate, setPhoneValidate] = useState(false);
  const [passwordValidate, setPasswordValidate] = useState(false);
  const router = useRouter();
  return (
    <Form
      value={value}
      handleChangeValue={useCallback((e) => setValue(e.target.value), [])}
      password={password}
      handleChangePassword={useCallback((e) => setPassword(e.target.value), [])}
      phoneValid={phoneValidate}
      passwordValid={passwordValidate}
      counter={counter}
      showCounter={showCounter}
      handleLogin={(e) => {
        console.log("value: ", value, "password: ", password);
        setCounter(0);
        if (!value || value?.includes("@")) {
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
        if (!password && value) {
          dispatch(
            GetOTP({
              // email: value?.includes("@") ? value : undefined,
              phone: !value?.includes("@") ? value : undefined,
            })
          ).then((res) => {
            console.log("res: ", res);
            if (res?.payload?.res?.status == 200) {
              router.push("/verify");
            } else if (res?.payload?.res?.data?.code == 2101) {
              const firstAttemp = new Date(
                res?.payload?.res?.data?.args?.lastAttempt
              ).getTime();
              const nextAttemp = new Date(
                res?.payload?.res?.data?.args?.nextAttempt
              ).getTime();
              // console.log(nextAttemp - firstAttemp)
              millisToMinutesAndSeconds(nextAttemp - firstAttemp);
              const time = Math.ceil((nextAttemp - firstAttemp) / 6000);
              console.log(time);
              setShowCounter(true);
              startTimer(time, setCounter, setShowCounter);
            } else if (res?.payload?.res?.data?.code == 1101) {
              setPhoneValidate(true);
            }
          });
        } else {
          dispatch(
            Login({
              email: value?.includes("@") ? value : undefined,
              phone: !value?.includes("@") ? value : undefined,
              password: password ? password : undefined,
              code: undefined,
            })
          ).then((res) => {
            console.log(res)
            if (res.payload?.res?.status == 200) {
              router.push("/");
            } else if (res.payload?.res?.data?.code?.includes(603)) {
              setPasswordValidate(true);
              setPhoneValidate(true);
            }
          });
        }
      }}
    />
  );
};

export default Signup;

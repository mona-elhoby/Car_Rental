import React, { useCallback, useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import Form from "../../components/register/loginform";
import { GetOTP, Login } from "../../store/reducer/auth";
import {startTimer} from '../../services/timerFunc'

const Signup = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");
  const [counter, setCounter] = useState(5 * 60)
  const [showCounter, setShowCounter]= useState(false)
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
      counter= {counter}
      showCounter= {showCounter}
      handleLogin={(e) => {
        console.log("value: ", value, "password: ", password);

        if (!value) {
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
        if (!password) {
          dispatch(
            GetOTP({
              email: value?.includes("@") ? value : undefined,
              phone: !value?.includes("@") ? value : undefined,
            })
          ).then((res) => {
            console.log("res: ", res?.payload?.res?.data?.code == 2101);
            if (res?.payload?.res?.status == 200) {
              router.push("/verify");
            }else if(res?.payload?.res?.data?.code == 2101){
              setShowCounter(true)
              startTimer(5 * 60)
            }
          })
        } else {
          dispatch(
            Login({
              email: value?.includes("@") ? value : undefined,
              phone: !value?.includes("@") ? value : undefined,
              password: password ? password : undefined,
              code: undefined,
            })
          );
        }
      }}
    />
  );
};

export default Signup;

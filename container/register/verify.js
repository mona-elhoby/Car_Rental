import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

import {
  LoginFeild,
  LoginSubmit,
  VerifyInput,
  IconSubmit,
} from "../../components/register/style";
import { getProfile } from "../../store/reducer/profile";
import { Login } from "../../store/reducer/auth";

const Verify = () => {
  const [state, setState] = useState({
    ele0: "",
    ele1: "",
    ele2: "",
    ele3: "",
    ele4: "",
    ele5: "",
  });
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const dispatch = useDispatch();
  const { valueOTP } = useSelector((state) => state.auth);
  const router = useRouter();
  //handle input change
  const handleChange = useCallback(
    (e) => {
      if (e.target.value.length == 1) {
        document.getElementById(e.target.id)?.nextSibling?.focus();
      }
      setState({ ...state, [e.target.id]: e.target.value });
    },
    [state]
  );
  //submit
  const handleSubmit = (e) => {
    // e.preventDefault()
    dispatch(
      Login({
        email: valueOTP?.email ? valueOTP?.email : undefined,
        phone: valueOTP?.phone ? valueOTP?.phone : undefined,
        password: undefined,
        code: Object.values(state).join(""),
      })
    ).then((res) => {
      if (res.payload?.res?.status == 200) {
        setCookie("user", res.payload.res.data, "/");
        localStorage.setItem("auth", JSON.stringify(res.payload.res.data.data));
        dispatch(getProfile()).then(result => {
          localStorage.setItem("firstName", result.payload.data?.firstName);
          localStorage.setItem("lastName", result.payload.data?.lastName);
        })
        router.push("/");
      }
    });
  };
  return (
    <>
      <LoginFeild>
        {[...Array(6)].map((ele, i) => (
          <VerifyInput
            key={i}
            id={`ele${i}`}
            maxLength="1"
            onChange={handleChange}
          />
        ))}
      </LoginFeild>
      <LoginSubmit onClick={handleSubmit}>
        <span>Verify</span>
        <IconSubmit />
      </LoginSubmit>
    </>
  );
};

export default Verify;

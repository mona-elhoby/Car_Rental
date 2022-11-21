import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useRouter } from 'next/router'

import { LoginFeild, LoginSubmit, VerifyInput, IconSubmit } from '../../components/register/style';
import { Login } from "../../store/reducer/auth";

const Verify = () => {
    const [state, setState] = useState({ele0: '', ele1: '', ele2: '',ele3: '', ele4: '', ele5: ''})
    const dispatch = useDispatch()
    const {valueOTP} = useSelector(state => state.auth)
    const router = useRouter()
    //handle input change
    const handleChange = useCallback(e => {
        if(e.target.value.length == 1){
            document.getElementById(e.target.id)?.nextSibling?.focus()
        }
            setState({...state, [e.target.id]: e.target.value})
    }, [state])
    //submit
    const handleSubmit = useCallback(() => {
        console.log(Object.values(state).join(''))
        dispatch(
          Login({
            email: valueOTP?.email ? valueOTP?.email : undefined,
            phone: valueOTP?.phone ? valueOTP?.phone : undefined,
            password: undefined,
            code: Object.values(state).join(''),
          })
        ).then(res => {
            if(res.payload?.res?.status == 200){
                router.push('/')
            }
        });
    }, [state])
  return (
    <>
    <LoginFeild>{console.log("valueOTP: ", valueOTP)}
        {
            [...Array(6)].map((ele, i) => (<VerifyInput key={i} id={`ele${i}`} maxLength="1" onChange={handleChange}/>))
        }
    </LoginFeild>
      <LoginSubmit onClick={handleSubmit}>
        <span>Verify</span>
        <IconSubmit />
      </LoginSubmit>
    </>
  )
}

export default Verify
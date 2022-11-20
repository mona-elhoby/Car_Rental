import React from 'react';

import { Login, LoginFeild, LoginSubmit, VerifyInput, IconSubmit } from '../../components/register/style';

const Verify = () => {
    const handleChange = useCallback(e => {
        if(e.target.value.length == 1){
            document.getElementById(e.target.id)?.nextSibling?.focus()
        }
    }, [])
  return (
    <Login>
    <LoginFeild>
        {
            [...Array(6)].map((ele, i) => (<VerifyInput key={i} id={`ele${i}`} maxLength="1" onChange={handleChange}/>))
        }
    </LoginFeild>
      <LoginSubmit onClick={handleSubmit}>
        <span>Verify</span>
        <IconSubmit />
      </LoginSubmit>
    </Login>
  )
}

export default Verify
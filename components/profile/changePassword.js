import React from 'react'
import {TextField, FormHelperText, Button} from '@mui/material'

const ChangePassword = props => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '20px'}}>
        <TextField
            id="standard-basic1"
            label="Current Password"
            variant="standard"
            type="password"
            value={props.currPassword}
            onChange={props.handleChangeCurrPassword}
            error={props.currPassValid ? true : false}
            maxLength="8"
          />
          {props.currPassValid ? (
            <FormHelperText
              sx={{ marginTop: "0 !important", marginBottom: "-15px" }}
            >
            check your password
            </FormHelperText>
          ) : null}
          <TextField
              id="standard-basic2"
              label="New Password"
              variant="standard"
              type="password"
              value={props.newPassword}
              onChange={props.handleChangeNewPassword}
              error={props.newPassValid ? true : false}
              maxLength="8"
            />
            {props.newPassValid ? (
              <FormHelperText
                sx={{ marginTop: "0 !important", marginBottom: "-15px" }}
              >
              check your password
              </FormHelperText>
            ) : null}
            <Button onClick={props.submitChange}>Applay</Button>
    </div>
  )
}

export default ChangePassword